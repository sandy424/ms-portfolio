"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], summary, label";

/**
 * 하늘색 점과 뒤따라오는 링으로 이루어진 커서.
 * 마우스를 쓰는 기기에서만 동작하고, 터치 기기와 '움직임 줄이기' 설정에서는 기본 커서를 쓴다.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!finePointer || reduceMotion || !dot || !ring) return;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const mouse = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    let frame = 0;
    let visible = false;

    const setVisible = (value: boolean) => {
      if (visible === value) return;
      visible = value;
      root.dataset.cursorVisible = value ? "true" : "false";
    };

    // 링은 점을 부드럽게 늦게 따라온다.
    const loop = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.18;
      ringPos.y += (mouse.y - ringPos.y) * 0.18;
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) {
        // 처음 나타날 때는 링이 화면 구석에서 날아오지 않도록 바로 위치시킨다.
        ringPos.x = e.clientX;
        ringPos.y = e.clientY;
      }
      const target = e.target as Element | null;
      // iframe(발표 자료) 안에서는 기본 커서를 쓰므로 숨긴다.
      setVisible(!(target instanceof HTMLIFrameElement));
      root.dataset.cursorHover = target?.closest(INTERACTIVE) ? "true" : "false";
    };
    const onLeave = () => setVisible(false);
    const onDown = () => (root.dataset.cursorDown = "true");
    const onUp = () => (root.dataset.cursorDown = "false");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      root.classList.remove("has-custom-cursor");
      delete root.dataset.cursorVisible;
      delete root.dataset.cursorHover;
      delete root.dataset.cursorDown;
    };
  }, []);

  return (
    <div aria-hidden className="custom-cursor">
      <div ref={ringRef} className="custom-cursor__ring">
        <span />
      </div>
      <div ref={dotRef} className="custom-cursor__dot">
        <span />
      </div>
    </div>
  );
}
