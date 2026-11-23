import { Award, GraduationCap, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { reveal } from "../lib/motion";
import { activity, certifications, education } from "../data/profile";

function CardTitle({ icon: Icon, children }: { icon: typeof Award; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon className="h-[18px] w-[18px]" aria-hidden />
      </span>
      <h3 className="text-lg font-bold text-ink">{children}</h3>
    </div>
  );
}

export default function Background() {
  return (
    <section id="background" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto w-full max-w-[1248px] px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading eyebrow="Background" title="학력 · 활동 · 자격" />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div {...reveal("up", 0)} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <CardTitle icon={GraduationCap}>학력</CardTitle>
            <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xl font-bold text-ink">{education.school}</p>
                <p className="mt-1 text-[15px] text-sub">{education.major}</p>
              </div>
              <span className="rounded-full bg-canvas px-2.5 py-1 text-xs font-medium text-sub">
                {education.status}
              </span>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-canvas p-4">
                <dt className="text-xs text-muted">재학 기간</dt>
                <dd className="mt-1 font-mono text-sm font-medium text-ink">{education.period}</dd>
              </div>
              <div className="rounded-xl bg-canvas p-4">
                <dt className="text-xs text-muted">학점</dt>
                <dd className="mt-1 text-sm text-sub">
                  <span className="text-lg font-bold text-ink">{education.gpa}</span> / {education.gpaMax}
                </dd>
              </div>
            </dl>
          </div>

          <div {...reveal("up", 120)} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <CardTitle icon={Users}>교내 활동</CardTitle>
            <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xl font-bold text-ink">{activity.title}</p>
                <p className="mt-1 text-[15px] text-sub">{activity.org}</p>
              </div>
              <span className="font-mono text-sm text-muted">{activity.period}</span>
            </div>
            <ol className="mt-5 flex flex-wrap items-center gap-1.5 text-xs font-medium">
              {activity.path.map((step, i) => (
                <li key={step} className="flex items-center gap-1.5">
                  <span
                    className={`rounded-full px-2.5 py-1 ${
                      i === activity.path.length - 1 ? "bg-accent text-white" : "bg-canvas text-sub"
                    }`}
                  >
                    {step}
                  </span>
                  {i < activity.path.length - 1 && <span className="text-muted">→</span>}
                </li>
              ))}
            </ol>
            <ul className="mt-5 space-y-2">
              {activity.items.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-[15px] leading-relaxed text-sub before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div {...reveal()} className="mt-5 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <CardTitle icon={Award}>자격 · 어학</CardTitle>
          <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-center justify-between gap-4 border-b border-line py-4 last:border-b-0 sm:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-ink">
                    {cert.name}
                    {cert.detail && <span className="ml-2 text-sm font-medium text-accent">{cert.detail}</span>}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">{cert.issuer}</p>
                </div>
                <span className="shrink-0 font-mono text-sm text-muted">{cert.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
