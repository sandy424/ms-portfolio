import Link from "next/link";
import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

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
    <main className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
      >
        <ArrowLeft className="w-4 h-4" />
        프로젝트 목록으로
      </Link>

      <div className="mt-18">
        <h1 className="text-4xl font-bold lg:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-gray-500">{project.description}</p>

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

        <div className="flex gap-3">
          <a href={project.url} className="flex inline-flex gap-2 rounded-lg bg-black mt-6 px-4 py-2">
            <img src="/link.png" alt="" className="w-6 h-6" />
            <span className="text-white">라이브 데모</span>
          </a>
          <a href={project.github} className="flex inline-flex gap-2 rounded-lg border border-gray-300 mt-6 px-4 py-2">
            <img src="/github.png" alt="" className="w-6 h-6" />
            <span>깃허브</span>
          </a>
        </div>

        <img
          src={project.picture}
          alt={project.title}
          className="mt-10 aspect-video w-full rounded-2xl object-cover"
        />
      </div>
    </main>
  )
}