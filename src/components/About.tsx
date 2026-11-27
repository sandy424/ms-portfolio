import SectionHeading from "./SectionHeading";
import { stackGroups, strengths } from "../data/profile";
import { reveal, revealSequence } from "../lib/motion";

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

        {/* 핵심 역량: 스크롤을 내리는 만큼 한 줄씩 올라온다 */}
        <ul {...revealSequence()} className="mt-16 border-t border-line">
          {strengths.map((item, index) => (
            <li key={item.title} {...reveal("up")} className="border-b border-line">
              <div className="group grid gap-2 rounded-xl px-2 py-7 transition-colors duration-300 hover:bg-[linear-gradient(90deg,var(--color-sky-soft),transparent_75%)] md:grid-cols-[88px_minmax(0,340px)_minmax(0,1fr)] md:items-baseline md:gap-8 md:px-5 md:py-8">
                <span
                  aria-hidden
                  className="font-display text-3xl font-semibold tabular-nums text-line transition-colors duration-300 group-hover:text-sky md:text-[40px]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-sky-deep">{item.keyword}</p>
                  <h3 className="mt-1.5 text-xl font-bold tracking-tight text-ink sm:text-[22px]">{item.title}</h3>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-sub md:mt-0">{item.description}</p>
              </div>
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
