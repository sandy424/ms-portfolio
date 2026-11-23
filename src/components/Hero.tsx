import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import TerminalTyping from "./TerminalTyping";
import { highlights, profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(18,20,23,0.08)_1px,transparent_0)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:pb-24 lg:pt-28">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-sub sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.status}
          </p>

          <h1 className="mt-6 text-[2.25rem] font-bold leading-[1.25] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            사용자 관점에서
            <br />
            <span className="text-accent">더 나은 화면</span>을 만드는
            <br />
            프론트엔드 개발자 강민서입니다.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-sub sm:text-lg">
            React와 TypeScript로 웹 서비스를 만들며, 기능 구현에 그치지 않고 처음 방문한
            사용자도 쉽게 이해할 수 있는 UI를 고민합니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-ink/85"
            >
              프로젝트 보기
              <ArrowRight className="h-4 w-4" />
            </Link>
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

        <div className="min-w-0 lg:justify-self-end">
          <TerminalTyping />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:pb-24">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className={`p-5 sm:p-7 ${index % 2 === 1 ? "border-l border-line" : ""} ${
                index >= 2 ? "border-t border-line lg:border-t-0" : ""
              } ${index === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="sr-only">{item.label}</dt>
              <dd className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{item.value}</dd>
              <dd className="mt-2 text-[13px] leading-snug text-muted sm:text-sm">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
