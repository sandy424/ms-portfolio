import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";

// projects 배열을 순회하면서 같은 객체 배열을 반환한다.
export function generatesStaticParams() {
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
    <main className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
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

      <img
        src={project.picture}
        alt={project.title}
        className="mt-10 aspect-video w-full rounded-2xl object-cover"
      />
    </main>
  )
}