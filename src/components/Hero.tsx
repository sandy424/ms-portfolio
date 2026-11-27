import { ArrowUpRight, Download } from "lucide-react";
import TerminalTyping from "./TerminalTyping";
import { profile } from "../data/profile";
import { reveal, scrollOut } from "../lib/motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden">
      {/* 하늘색 · 핑크 배경 빛 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-sky/25 blur-[110px]" />
        <div className="absolute -bottom-48 left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-pink/25 blur-[110px]" />
      </div>
      <div
        {...scrollOut()}
        className="relative mx-auto grid w-full max-w-[1248px] flex-1 content-center items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16"
      >
        <div className="min-w-0">
          <h1 {...reveal("up", 100)} className="text-[2.25rem] font-bold leading-[1.25] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            사용자 관점에서
            <br />
            <span className="text-gradient">더 나은 화면</span>을 만드는
            <br />
            프론트엔드 개발자 강민서입니다.
          </h1>

          <p {...reveal("up", 350)} className="mt-6 max-w-xl text-base leading-relaxed text-sub sm:text-lg">
            React와 TypeScript로 웹 서비스를 만들며, 기능 구현에 그치지 않고 처음 방문한
            사용자도 쉽게 이해할 수 있는 UI를 고민합니다.
          </p>

          <div {...reveal("up", 600)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-ink/85"
            >
              <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4 fill-current">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              github.com/sandy424
              <ArrowUpRight className="h-4 w-4 opacity-70" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:border-ink/30"
            >
              <Download className="h-4 w-4" />
              이력서 다운로드
            </a>
          </div>
        </div>

        <div {...reveal("right", 700)} className="min-w-0 lg:justify-self-end">
          <TerminalTyping />
        </div>
      </div>

      {/* 스크롤 안내 */}
      <div {...scrollOut()} className="relative flex justify-center pb-6">
        <a
          href="#about"
          aria-label="다음 내용으로 스크롤"
          className="flex animate-[intro-fade_1.2s_cubic-bezier(0.16,1,0.3,1)_1.2s_both] flex-col items-center gap-3 text-muted transition-colors hover:text-ink"
        >
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em]">Scroll</span>
          <span className="relative h-12 w-px overflow-hidden bg-line">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-cue_1.8s_cubic-bezier(0.65,0,0.35,1)_infinite] bg-brand-gradient motion-reduce:animate-none" />
          </span>
        </a>
      </div>
    </section>
  );
}
