import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return(
    <section id="projects" className="flex min-h-screen w-full items-center justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-30">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-center">
        <div className="flex flex-col gap-12 px-10">
          {projects.map((project, index) => (
            <article key={project.title}
              className={`flex flex-col items-center gap-8 lg:gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="flex flex-col gap-8 w-full lg:w-1/2">
                <h2 className="text-3xl font-bold lg:text-4xl">{project.title}</h2>
                <p className="text-gray-500 text-base">{project.description}</p>
                <ul className="flex flex-wrap gap-4 pt-2">
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="border rounded-full px-3 py-1 border-gray-300 text-sm text-gray-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/projects/${project.slug}`}
                  className="mt-4 w-full rounded-xl bg-black py-2 text-lg font-medium text-white cursor-pointer sm:w-auto sm:px-10 text-center"
                  >
                  See More
                </Link>
              </div>

              <div className="w-full lg:w-1/2">
                <img src={project.picture} alt={project.title} className="aspect-[4/3] w-full rounded-2xl object-cover" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}