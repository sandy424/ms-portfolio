"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// CSS에서 패럴랙스 요소를 1.15배 확대하므로 위아래로 7.5%씩 여유가 있다.
// 빈 틈이 보이지 않도록 그보다 조금 작게 움직인다.
const MAX_SHIFT_RATIO = 0.07;

/**
 * data-reveal / data-parallax 속성이 붙은 요소에 스크롤 애니메이션을 적용한다.
 * 레이아웃에 한 번만 렌더링하며, 페이지가 바뀌면 새 요소를 다시 찾는다.
 */
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    // 움직임 줄이기 설정이면 애니메이션 없이 바로 보여준다.
    if (reduceMotion) {
      revealEls.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    // ── 스크롤 등장 ──
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    // ── 패럴랙스 ──
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const visible = new Set<HTMLElement>();
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      visible.forEach((el) => {
        const speed = Number(el.dataset.parallax) || 0.1;
        // 움직이는 요소 자신이 아닌 고정된 부모 기준으로 위치를 잰다.
        const rect = (el.parentElement ?? el).getBoundingClientRect();
        const maxShift = rect.height * MAX_SHIFT_RATIO;
        const offset = (rect.top + rect.height / 2 - viewportCenter) * -speed;
        const clamped = Math.max(-maxShift, Math.min(maxShift, offset));
        el.style.setProperty("--parallax-y", `${clamped.toFixed(1)}px`);
      });
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // 화면 근처에 있는 요소만 계산해서 스크롤 비용을 줄인다.
    const parallaxObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) visible.add(el);
          else visible.delete(el);
        });
        requestUpdate();
      },
      { rootMargin: "20% 0px" }
    );
    parallaxEls.forEach((el) => parallaxObserver.observe(el));

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      revealObserver.disconnect();
      parallaxObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
