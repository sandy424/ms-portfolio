import Link from "next/link";
import Image from "next/image";
import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ParItem } from "@/src/types/project";

const labelStyles: Record<ParItem["label"], string> = {
  PROBLEM: "bg-amber-100 text-amber-700",
  ACTION: "bg-yellow-100 text-yellow-700",
  RESULT: "bg-emerald-100 text-emerald-700",
};

// projects 배열을 순회하면서 같은 객체 배열을 반환한다.
export function generateStaticParams() {
  return projects.map((p) => ({slug: p.slug}));  // 결과: [{ slug: "ezread" }, { slug: "keung-keung" }]
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);


  if (!project) return notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-10">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
      >
        <ArrowLeft className="w-4 h-4" />
        프로젝트 목록으로
      </Link>

      <div className="mt-12 min-w-0 sm:mt-18">
        <h1 className="break-words text-3xl font-bold sm:text-4xl lg:text-5xl">{project.title}</h1>
        <p className="mt-4 break-words text-base leading-relaxed text-gray-500 sm:text-lg">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-3">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-600"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={project.url} className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-2 sm:justify-start">
            <img src="/link.png" alt="" className="w-6 h-6" />
            <span className="text-white">라이브 데모</span>
          </a>
          <a href={project.github} className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 sm:justify-start">
            <img src="/github.png" alt="" className="w-6 h-6" />
            <span>깃허브</span>
          </a>
          <p className="break-words text-sm font-semibold text-gray-500">{project.period} | {project.form}</p>
        </div>

        <Image
          src={project.picture}
          alt={project.title}
          width={1200}
          height={675}
          className="mt-8 aspect-[21/9] w-full rounded-2xl object-cover sm:mt-10"
        />

        {/* 설명 */}
        <div className="px-1 py-8 sm:p-4 sm:pt-16 ">
          <h2 className="text-3xl font-bold">왜 만들었나</h2>
          <p className="mt-6 text-lg text-gray-600 font-base break-words leading-8 whitespace-pre-line">{project.why}</p>
          <hr className="my-16 border-gray-200" />

          <h2 className="text-3xl font-bold">핵심 기능</h2>
          <div className="m-0 mt-4 grid grid-cols-2 gap-3 sm:m-8 sm:grid-cols-4 sm:gap-4">
            {project.features.map((item) => (
              <div
                key={item.feature}
                className="flex min-w-0 flex-col items-center justify-center gap-3 rounded-lg border border-gray-300 px-2 py-4 text-center transition-colors sm:px-4 sm:py-5"
              >
                <img src={item.picture} alt={item.feature} className="h-10 w-10 object-contain" />
                <p className="text-base font-medium text-gray-700">{item.feature}</p>
              </div>
            ))}
          </div>
          <hr className="my-16 border-gray-200" />
          
          <h2 className="text-3xl font-bold">기술적으로 고민한 지점</h2>
          <div>
            <div className="mt-12 space-y-10">
              {project.technicalChallenge.map((challenge) => (
                <div key={challenge.title}>
                  <h3
                    className="text-base font-semibold text-gray-800 sm:text-xl"
                  >
                    {challenge.title}
                  </h3>

                  <div className="mt-8 space-y-8">
                  {challenge.items.map((item) => (
                    <div key={item.label}>
                      <span
                        className={`inline-block rounded px-2.5 py-1 text-xs font-semibold ${labelStyles[item.label]}`}
                      >
                        {item.label}
                      </span>
                      {Array.isArray(item.content) ? (
                        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                          {item.content.map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                          {item.content}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-16 border-gray-200" />
          
          <h2 className="text-3xl font-bold">회고</h2>
          <p className="mt-6 text-sm text-gray-600 sm:text-base leading-8 whitespace-pre-line">{project.retrospect}</p>
        </div>
      </div>
    </div>
  )
}