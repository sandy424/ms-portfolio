type CareerItem = {
  company: string;
  period: string;
  content: string[];
  tag: string;
};

const careerData: CareerItem[] = [
  {
    period: "2025.06 ~ 2025.08",
    tag: "콘텐츠·행정",
    company: "인테그로",
    content: [
      "사업 홍보 콘텐츠 제작 및 사무·행정 지원 담당",
      "업무 프로세스 정비를 통해 조직 운영 효율화에 기여",
    ],
  },
  {
    period: "2026.04 ~ 2026.06",
    tag: "PM 인턴",
    company: "예이린 사회적협동조합",
    content: [
      "'거북이 플랫폼' 개발 프로젝트 PM 인턴",
      "다각적 이해관계자 요구사항 정의 및 개발 일정 수립",
      "회의록 체계화로 협업 프로세스 확립",
    ],
  },
  {
    period: "2026.09 ~ 2026.12",
    tag: "콘텐츠·행정",
    company: "공감오래콘텐츠",
    content: [],
  },
];

export default function Career() {
  return (
    <div className="order-2 grid min-w-0 grid-cols-[160px_minmax(0,1fr)] gap-8 border-t border-[#E6E8EB] py-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-14 max-[720px]:grid-cols-1 max-[720px]:gap-5">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">경력</h2>

      <div className="flex min-w-0 flex-col-reverse [&>div:last-child>div:last-child]:before:border-[#2457F5] [&>div:last-child>div:last-child]:before:bg-[#2457F5] [&>div:last-child>div:last-child]:before:shadow-[0_0_0_4px_#DCE6FF]">
        <div className="hidden" />

        {careerData.map((item, index) => (
          <div
            key={item.company}
            className={index === careerData.length - 1 ? "grid min-w-0 grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-[180px_minmax(0,1fr)] max-[720px]:grid-cols-1 max-[720px]:gap-2" : "grid min-w-0 grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-[180px_minmax(0,1fr)] max-[720px]:grid-cols-1 max-[720px]:gap-2"}
          >
            <div className="hidden" />

            <div className="pt-1 text-sm text-[#5B626B] max-[720px]:pl-8 max-[720px]:pt-0">
              <span>{item.period}</span>
            </div>

            <div className="relative min-w-0 border-l border-[#D5D9DE] pb-12 pl-8 lg:pb-14 lg:pl-10 before:absolute before:top-2 before:-left-[6px] before:h-[11px] before:w-[11px] before:rounded-full before:border-2 before:border-[#9AA1AA] before:bg-white before:content-['']">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[22px] font-bold sm:text-2xl [overflow-wrap:anywhere]">{item.company}</p>
                <span className="w-fit rounded-full bg-[#F1F3F5] px-2.5 py-1 text-xs font-medium text-[#3A4048]">
                  {item.tag}
                </span>
              </div>

              {item.content && (
                <ul className="mt-4 list-disc pl-[18px] text-[15px] leading-[1.8] text-[#3A4048] [overflow-wrap:anywhere]">
                  {item.content.map((content) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
