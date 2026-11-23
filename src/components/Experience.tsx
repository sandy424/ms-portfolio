import SectionHeading from "./SectionHeading";
import { experiences } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          eyebrow="Experience"
          title="경력"
          description="현장실습과 개발 PM 경험을 통해 사용자와 동료, 두 관점 모두에서 서비스를 바라보는 법을 배웠습니다."
        />

        <ol className="mt-12 space-y-5">
          {experiences.map((exp) => (
            <li
              key={exp.company}
              className="grid gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10"
            >
              <div>
                <p className="font-mono text-sm text-muted">{exp.period}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      재직중
                    </span>
                  )}
                  <span className="rounded-full bg-canvas px-2.5 py-1 text-xs font-medium text-sub">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="min-w-0">
                <h3 className="text-xl font-bold text-ink sm:text-2xl">{exp.company}</h3>
                <p className="mt-1 text-[15px] font-medium text-accent">{exp.role}</p>

                {exp.metrics && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {exp.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl border border-accent/20 bg-accent-soft px-4 py-2.5"
                      >
                        <span className="text-lg font-bold text-accent">{metric.value}</span>
                        <span className="ml-2 text-sm text-sub">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 space-y-6">
                  {exp.groups.map((group, index) => (
                    <div key={group.title ?? index}>
                      {group.title && (
                        <h4 className="text-[15px] font-semibold text-ink">{group.title}</h4>
                      )}
                      <ul className={`space-y-2 ${group.title ? "mt-3" : ""}`}>
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="relative pl-4 text-[15px] leading-relaxed text-sub before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-muted"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
