import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { parallax, reveal } from "../lib/motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-[1248px] px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow="Projects"
          title="프로젝트"
          description="문제를 발견하고, 기획부터 배포까지 직접 만들어 본 서비스들입니다."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.slug} {...reveal()} className="flex">
            <article
              className="group flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-canvas transition-all duration-200 hover:-translate-y-1 hover:border-sky/50 hover:shadow-[0_24px_48px_-24px_rgba(91,180,238,0.45)]"
            >
              <Link href={`/projects/${project.slug}`} className="block overflow-hidden border-b border-line">
                <div {...parallax(0.08)}>
                <Image
                  src={project.picture}
                  alt={`${project.title} 대표 이미지`}
                  width={1200}
                  height={750}
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted">
                  <span className="rounded-full bg-surface px-2.5 py-1 text-sub">{project.form}</span>
                  <span className="font-mono">{project.period}</span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink">{project.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-sub">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-surface px-2 py-1 font-display text-xs font-medium text-sub"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink/85"
                  >
                    자세히 보기
                  </Link>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/30"
                  >
                    Live
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/30"
                  >
                    GitHub
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
