import SectionHeading from "./SectionHeading";
import { stackGroups, strengths } from "../data/profile";
import { reveal } from "../lib/motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-[1248px] px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <SectionHeading eyebrow="About me" title="꾸준히 배우고, 피드백으로 성장합니다" />
          <div {...reveal("up", 250)} className="space-y-5 text-base leading-[1.85] text-sub sm:text-[17px]">
            <p>
              팀 프로젝트와 실무를 경험하며 서로 다른 역할의 동료들과 협업했고, 그 과정에서{" "}
              <strong className="font-semibold text-ink">다양한 관점과 조언을 수용하는 자세</strong>의
              중요성을 배웠습니다.
            </p>
            <p>
              현장실습에서는 게임 개발 커뮤니티 사이트의 UI 개선을 맡아, 처음 방문한 사용자도
              서비스의 목적과 기능을 쉽게 파악할 수 있도록 화면 구성을 기획하고{" "}
              <strong className="font-semibold text-ink">AI 도구를 활용해 개발 기간을 74% 단축</strong>
              했습니다.
            </p>
            <p>
              부족한 부분을 회피하기보다 꾸준히 학습하고, 받은 피드백을 다음 결과물에 반영하며{" "}
              <strong className="font-semibold text-ink">더 나은 사용자 경험</strong>을 만드는
              개발자로 성장하고 있습니다.
            </p>
          </div>
        </div>

        <ul className="mt-16 grid gap-4 md:grid-cols-2">
          {strengths.map((item, index) => (
            <li key={item.title} {...reveal()} className="flex">
              <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-canvas p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-sky/50 hover:shadow-[0_24px_48px_-28px_rgba(35,133,201,0.4)] sm:p-8">
                {/* 마우스를 올리면 위쪽에 하늘 → 핑크 선이 그어진다 */}
                <span
                  aria-hidden
                  className="bg-brand-gradient absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-6 top-5 font-display text-5xl font-semibold tabular-nums text-line transition-colors duration-300 group-hover:text-sky/30 sm:right-8 sm:top-6"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="font-display text-sm font-semibold text-sky-deep">{item.keyword}</p>
                <h3 className="mt-2 pr-16 text-xl font-bold tracking-tight text-ink sm:text-[22px]">{item.title}</h3>
                <p className="mb-6 mt-4 text-[15px] leading-relaxed text-sub">{item.description}</p>

                <div className="mt-auto flex items-center gap-2 border-t border-line pt-4 text-sm text-muted">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky" aria-hidden />
                  {item.evidence}
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div {...reveal()} className="mt-16 rounded-2xl border border-line p-6 sm:p-8">
          <h3 className="text-lg font-bold text-ink">Tech Stack</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {stackGroups.map((group) => (
              <div key={group.title}>
                <p className="font-display text-sm font-semibold text-charcoal">
                  {group.title}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas px-3 py-2 text-sm font-medium text-ink"
                    >
                      {item.icon ? (
                        <img src={item.icon} alt="" className="h-4 w-4 object-contain" />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden />
                      )}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
