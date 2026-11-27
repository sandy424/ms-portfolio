import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { parallax, reveal } from "../lib/motion";
import { projects } from "../data/projects";
import type { ProjectType } from "../types/project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-[1248px] px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow="Projects"
          title="프로젝트"
          description="문제를 발견하고, 기획부터 배포까지 직접 만들어 본 서비스들입니다."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug} {...reveal()} className="flex">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectType }) {
  const image = (
    <div {...parallax(0.08)}>
      <Image
        src={project.picture}
        alt={`${project.title} 대표 화면`}
        width={1200}
        height={750}
        sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );

  return (
    <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-canvas transition-all duration-200 hover:-translate-y-1 hover:border-sky/50 hover:shadow-[0_24px_48px_-24px_rgba(91,180,238,0.45)]">
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} 사이트 열기`}
          className="block overflow-hidden border-b border-line"
        >
          {image}
        </a>
      ) : (
        <div className="overflow-hidden border-b border-line">{image}</div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted">
          <span className="rounded-full bg-surface px-2.5 py-1 text-sub">{project.form}</span>
          <span className="font-mono">{project.period}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-ink sm:text-2xl">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-sky-deep">{project.role}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-sub">{project.description}</p>

        {project.tech.length > 0 && (
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
        )}

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink/85"
            >
              사이트 보기
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/30"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <Lock className="h-3.5 w-3.5" aria-hidden />
              소스 코드 비공개
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
