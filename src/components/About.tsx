import { MessagesSquare, MousePointerClick, RefreshCw } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { stackGroups, strengths, type Strength } from "../data/profile";

const strengthIcons: Record<Strength["icon"], typeof MousePointerClick> = {
  user: MousePointerClick,
  feedback: RefreshCw,
  team: MessagesSquare,
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-[1360px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <SectionHeading eyebrow="About Me" title="꾸준히 배우고, 피드백으로 성장합니다" />
          <div className="space-y-5 text-base leading-[1.85] text-sub sm:text-[17px]">
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

        <ul className="mt-16 grid gap-4 md:grid-cols-3">
          {strengths.map((item) => {
            const Icon = strengthIcons[item.icon];
            return (
              <li
                key={item.title}
                className="rounded-2xl border border-line bg-canvas p-6 transition-colors hover:border-accent/40 sm:p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted">{item.english}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-sub">{item.description}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 rounded-2xl border border-line p-6 sm:p-8">
          <h3 className="text-lg font-bold text-ink">Tech Stack</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {stackGroups.map((group) => (
              <div key={group.title}>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
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
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
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
