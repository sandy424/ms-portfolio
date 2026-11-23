import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../../../data/projects";
import { ParItem } from "@/src/types/project";
import SlidePpt from "@/src/components/SlidePpt";
import { parallax, reveal } from "@/src/lib/motion";

const labelStyles: Record<ParItem["label"], string> = {
  PROBLEM: "bg-rose-50 text-rose-700 ring-rose-200",
  ACTION: "bg-accent-soft text-accent ring-accent/25",
  RESULT: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | 강민서 포트폴리오` : "프로젝트 | 강민서 포트폴리오",
    description: project?.description,
  };
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-14 sm:py-16">
      <h2 {...reveal()} className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
      <div {...reveal("up", 200)} className="mt-8">{children}</div>
    </section>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const links = [
    { href: project.url, label: "라이브 데모", icon: "/link.png", primary: true },
    { href: project.github, label: "GitHub", icon: "/github.png" },
    { href: project.notion, label: "Notion", icon: "/notion.png" },
  ].filter((link) => link.href);

  const meta = [
    { label: "기간", value: project.period },
    { label: "형태", value: project.form },
    { label: "역할", value: project.role },
  ];

  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          프로젝트 목록으로
        </Link>

        <header {...reveal()} className="mt-10">
          <h1 className="break-words text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 break-words text-lg leading-relaxed text-sub">{project.description}</p>

          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {meta.map((m) => (
              <div key={m.label} className="bg-surface p-4 sm:p-5">
                <dt className="text-xs text-muted">{m.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-ink sm:text-[15px]">{m.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line bg-surface px-2 py-1 font-mono text-xs text-sub"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                  link.primary
                    ? "bg-ink text-white hover:bg-ink/85"
                    : "border border-line bg-surface text-ink hover:border-ink/30"
                }`}
              >
                <img
                  src={link.icon}
                  alt=""
                  className="h-5 w-5 object-contain"
                />
                {link.label}
                <ArrowUpRight className="h-4 w-4 opacity-60" />
              </a>
            ))}
          </div>
        </header>

        <div {...reveal("up", 300)} className="mt-12 overflow-hidden rounded-2xl border border-line">
          <div {...parallax(0.06)}>
            <Image
              src={project.picture}
              alt={`${project.title} 대표 이미지`}
              width={1200}
              height={675}
              priority
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-14">
          <Section id="why" title="왜 만들었나">
            <p className="whitespace-pre-line break-words text-base leading-[1.9] text-sub sm:text-[17px]">
              {project.why.replace(/\n[ \t]+/g, "\n")}
            </p>
          </Section>

          <Section id="features" title="핵심 기능">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.features.map((item) => (
                <li
                  key={item.feature}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface px-3 py-6 text-center"
                >
                  <img src={item.picture} alt="" className="h-10 w-10 object-contain" />
                  <p className="text-[15px] font-semibold text-ink">{item.feature}</p>
                </li>
              ))}
            </ul>
          </Section>

          {project.slideId && (
            <Section id="slides" title="발표 자료">
              <SlidePpt slideId={project.slideId} />
            </Section>
          )}

          <Section id="challenges" title="기술적으로 고민한 지점">
            <div className="space-y-6">
              {project.technicalChallenge.map((challenge, index) => (
                <article
                  key={challenge.title}
                  className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
                >
                  <p className="font-mono text-xs font-semibold text-muted">
                    CHALLENGE {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-ink sm:text-xl">{challenge.title}</h3>

                  <div className="mt-6 space-y-6">
                    {challenge.items.map((item) => (
                      <div key={item.label} className="grid gap-3 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-5">
                        <span
                          className={`h-fit w-fit rounded-md px-2 py-1 font-mono text-[11px] font-bold ring-1 ring-inset ${labelStyles[item.label]}`}
                        >
                          {item.label}
                        </span>
                        {Array.isArray(item.content) ? (
                          <ul className="space-y-2">
                            {item.content.map((line) => (
                              <li
                                key={line}
                                className="relative pl-4 text-[15px] leading-relaxed text-sub before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-muted"
                              >
                                {line}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-[15px] leading-relaxed text-sub">{item.content}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="retrospect" title="회고">
            <p className="whitespace-pre-line rounded-2xl bg-surface p-6 text-base leading-[1.9] text-sub ring-1 ring-line sm:p-8">
              {project.retrospect.replace(/\n[ \t]+/g, "\n")}
            </p>
          </Section>
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/30"
          >
            <ArrowLeft className="h-4 w-4" />
            다른 프로젝트 보기
          </Link>
        </div>
      </div>
    </main>
  );
}
