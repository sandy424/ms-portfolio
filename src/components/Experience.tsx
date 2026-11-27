"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { experiences, type Experience as ExperienceItem } from "../data/profile";

// 카드 한 장을 넘기는 데 쓰는 스크롤 길이 (화면 높이 대비)
const SCROLL_PER_CARD = 0.8;

/**
 * 경력 섹션.
 * 데스크톱에서는 섹션이 화면에 고정된 채 세로 스크롤에 맞춰 카드가 가로로 넘어가고,
 * 보고 있는 카드만 또렷하게 강조된다.
 * 모바일과 '움직임 줄이기' 설정에서는 카드를 세로로 쌓아 보여준다.
 */
export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);
  const count = experiences.length;

  // 고정(가로 스크롤) 모드를 쓸 수 있는 환경인지 판단
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px) and (min-height: 640px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const decide = () => setPinned(wide.matches && !reduce.matches && count > 1);
    decide();
    wide.addEventListener("change", decide);
    reduce.addEventListener("change", decide);
    return () => {
      wide.removeEventListener("change", decide);
      reduce.removeEventListener("change", decide);
    };
  }, [count]);

  // 스크롤 위치 → 카드 가로 이동
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (!pinned) {
      track.style.transform = "";
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const first = track.children[0] as HTMLElement | undefined;
      const second = track.children[1] as HTMLElement | undefined;
      if (!first || !second) return;
      const step = second.offsetLeft - first.offsetLeft; // 카드 너비 + 간격

      const scrollable = section.offsetHeight - window.innerHeight;
      const passed = -section.getBoundingClientRect().top;
      const progress = Math.max(0, Math.min(1, passed / scrollable));
      const position = progress * (count - 1);

      track.style.transform = `translate3d(${-position * step}px, 0, 0)`;
      setActive(Math.round(position));
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pinned, count]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative scroll-mt-16 border-t border-line"
      style={pinned ? { height: `calc(100vh + ${(count - 1) * SCROLL_PER_CARD * 100}vh)` } : undefined}
    >
      <div
        className={
          pinned
            ? "sticky top-16 flex h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden"
            : ""
        }
      >
        <div
          className={`mx-auto w-full max-w-[1248px] px-4 sm:px-6 ${pinned ? "py-10" : "py-20 lg:py-28"}`}
        >
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Experience"
              title="경력"
              description="현장실습과 개발 PM 경험을 통해 사용자와 동료, 두 관점 모두에서 서비스를 바라보는 법을 배웠습니다."
            />
            {pinned && (
              <p className="shrink-0 pb-1 font-display text-lg font-semibold tabular-nums text-muted">
                <span className="text-ink">{String(active + 1).padStart(2, "0")}</span>
                {" / "}
                {String(count).padStart(2, "0")}
              </p>
            )}
          </div>

          <ol
            ref={trackRef}
            className={pinned ? "mt-10 flex gap-6 will-change-transform" : "mt-12 flex flex-col gap-5"}
          >
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.company}
                exp={exp}
                index={index}
                pinned={pinned}
                active={!pinned || index === active}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
  pinned,
  active,
}: {
  exp: ExperienceItem;
  index: number;
  pinned: boolean;
  active: boolean;
}) {
  return (
    <li
      aria-current={pinned && active ? "true" : undefined}
      className={`flex-none rounded-3xl border bg-surface p-6 transition-[opacity,scale,box-shadow,border-color] duration-500 ease-out sm:p-8 ${
        pinned ? "w-[min(880px,78vw)]" : "w-full"
      } ${
        active
          ? "border-sky/50 opacity-100 shadow-[0_30px_60px_-30px_rgba(35,133,201,0.35)]"
          : "scale-[0.96] border-line opacity-35"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-display text-sm font-semibold text-sky-deep">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{exp.company}</h3>
          <p className="mt-1 text-[15px] font-medium text-sub">{exp.role}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="font-mono text-sm text-muted">{exp.period}</p>
          <div className="flex flex-wrap justify-end gap-2">
            {exp.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                재직중
              </span>
            )}
            <span className="rounded-full bg-canvas px-2.5 py-1 text-xs font-medium text-sub">{exp.type}</span>
          </div>
        </div>
      </div>

      {exp.metrics && (
        <div className="mt-5 flex flex-wrap gap-2">
          {exp.metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-sky/30 bg-sky-soft px-3.5 py-2">
              <span className="text-base font-bold text-sky-deep">{metric.value}</span>
              <span className="ml-2 text-sm text-sub">{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      <div
        className={`mt-6 grid gap-6 border-t border-line pt-6 ${
          exp.groups.length > 1 ? "md:grid-cols-2 md:gap-8" : ""
        }`}
      >
        {exp.groups.map((group, i) => (
          <div key={group.title ?? i}>
            {group.title && <h4 className="text-[15px] font-semibold text-ink">{group.title}</h4>}
            <ul className={`space-y-1.5 ${group.title ? "mt-3" : ""}`}>
              {group.items.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-[14px] leading-relaxed text-sub before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-sky"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </li>
  );
}
