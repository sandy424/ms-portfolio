import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";
import type { ProjectType } from "../types/project";

/**
 * 프로젝트 섹션.
 * 스크롤하면 카드가 아래에서 올라와 앞 카드 위에 한 장씩 겹쳐 쌓인다. (md 이상)
 */
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-[1248px] px-4 pb-24 pt-20 sm:px-6 lg:pb-40 lg:pt-28">
        <SectionHeading
          eyebrow="Projects"
          title="프로젝트"
          description="문제를 발견하고, 기획부터 배포까지 직접 만들어 본 서비스들입니다."
        />

        <ul className="mt-12 flex flex-col gap-6 md:gap-10">
          {projects.map((project, index) => (
            <li
              key={project.slug}
              data-stack=""
              className="md:sticky"
              // 겹칠 때 앞 카드의 윗부분이 조금씩 보이도록 카드마다 고정 위치를 내린다.
              style={{ top: `calc(6rem + ${index * 1.25}rem)` }}
            >
              <ProjectCard project={project} index={index} total={projects.length} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total }: { project: ProjectType; index: number; total: number }) {
  const screenshot = (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_20px_40px_-28px_rgba(35,133,201,0.5)]">
      <div className="flex h-7 items-center gap-1.5 border-b border-line bg-canvas px-3">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
      </div>
      <Image
        src={project.picture}
        alt={`${project.title} 대표 화면`}
        width={1200}
        height={750}
        sizes="(min-width: 1024px) 640px, 100vw"
        className="aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  );

  return (
    <article className="grid gap-8 rounded-3xl border border-line bg-canvas p-5 shadow-[0_-12px_40px_-24px_rgba(18,20,23,0.25)] sm:p-7 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-center md:gap-10 lg:p-9">
      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} 사이트 열기`}>
          {screenshot}
        </a>
      ) : (
        screenshot
      )}

      <div className="flex flex-col">
        <p className="font-display text-sm font-semibold tabular-nums text-muted">
          <span className="text-sky-deep">{String(index + 1).padStart(2, "0")}</span>
          {" / "}
          {String(total).padStart(2, "0")}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-muted">
          <span className="rounded-full bg-surface px-2.5 py-1 text-sub">{project.form}</span>
          <span className="font-mono">{project.period}</span>
        </div>

        <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{project.title}</h3>
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

        <div className="mt-7 flex flex-wrap items-center gap-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink/85"
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
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/30"
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
