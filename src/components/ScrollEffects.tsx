"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// CSS에서 패럴랙스 요소를 1.15배 확대하므로 위아래로 7.5%씩 여유가 있다.
// 빈 틈이 보이지 않도록 그보다 조금 작게 움직인다.
const MAX_SHIFT_RATIO = 0.07;

// 순차 등장 구간: 컨테이너 윗부분이 화면 높이의 90% 지점에 닿으면 첫 항목이,
// 30% 지점까지 올라오면 마지막 항목이 나타난다.
const SEQUENCE_START = 0.9;
const SEQUENCE_END = 0.3;

/**
 * data-reveal / data-parallax 속성이 붙은 요소에 스크롤 애니메이션을 적용한다.
 * 레이아웃에 한 번만 렌더링하며, 페이지가 바뀌면 새 요소를 다시 찾는다.
 */
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const sequences = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-sequence]"));

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
    // 순차 등장 컨테이너 안의 요소는 스크롤 위치로 따로 제어한다.
    revealEls
      .filter((el) => !el.closest("[data-reveal-sequence]"))
      .forEach((el) => revealObserver.observe(el));

    // ── 스크롤 연동 순차 등장 ──
    const updateSequences = () => {
      const vh = window.innerHeight;
      sequences.forEach((container) => {
        const items = Array.from(container.querySelectorAll<HTMLElement>("[data-reveal]"));
        const top = container.getBoundingClientRect().top;
        const progress = (vh * SEQUENCE_START - top) / (vh * (SEQUENCE_START - SEQUENCE_END));
        const shown = progress <= 0 ? 0 : Math.ceil(Math.min(progress, 1) * items.length);
        items.forEach((item, i) => item.classList.toggle("is-revealed", i < shown));
      });
    };

    // ── 패럴랙스 ──
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const visible = new Set<HTMLElement>();
    let frame = 0;

    // ── 인트로 스크롤 아웃 ──
    const scrollOutEls = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-out]"));
    const updateScrollOut = () => {
      scrollOutEls.forEach((el) => {
        const section = el.parentElement ?? el;
        const rect = section.getBoundingClientRect();
        // 인트로 높이의 75%만큼 스크롤하면 완전히 밀려난 상태(1)가 된다.
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.75)));
        el.style.setProperty("--scroll-out", progress.toFixed(3));
      });
    };

    const update = () => {
      frame = 0;
      updateSequences();
      updateScrollOut();
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
    requestUpdate();

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
