import { ArrowUpRight, Download, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pb-6">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-white sm:px-12 sm:py-20 lg:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight sm:text-4xl">
            읽어주셔서 감사합니다.
            <br />
            함께 일할 기회를 기다리고 있습니다.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
            궁금한 점이나 제안이 있으시면 편하게 연락 주세요.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-white/90"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              github.com/sandy424
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              이력서 다운로드
            </a>
          </div>
        </div>
      </div>

      <footer className="flex flex-col gap-1 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© 2026 {profile.englishName}. All rights reserved.</p>
        <p>Built with Next.js · Tailwind CSS</p>
      </footer>
      </div>
    </section>
  );
}
