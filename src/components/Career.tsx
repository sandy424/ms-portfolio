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
    <div className="flex w-full flex-col rounded-2xl border border-transparent bg-black/5 p-6 sm:p-8 lg:max-w-[720px] lg:p-12">
      <h2 className="text-2xl font-bold sm:text-3xl">경력</h2>

      <div className="relative mt-10 flex-1 pb-10 pl-7">
        <div className="absolute bottom-2 left-[6px] top-2 w-px bg-gray-300" />

        {careerData.map((item, index) => (
          <div
            key={item.company}
            className={index === careerData.length - 1 ? "relative" : "relative mb-9"}
          >
            <div className="absolute -left-7 top-1.5 h-3.5 w-3.5 rounded-full border-3 border-gray-500 bg-gray-50" />

            <div className="mb-4 flex flex-col gap-2 pl-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-base font-semibold leading-loose text-gray-500 sm:text-lg">{item.period}</span>
              <span className="inline-flex w-fit rounded-lg bg-green-100/50 px-3 py-1.5 text-xs font-semibold sm:text-sm">
                {item.tag}
              </span>
            </div>

            <p className="mb-6 pl-4 text-xl font-bold sm:text-2xl">{item.company}</p>

            {item.content && (
              <ul className="list-disc space-y-2 pl-10 text-sm sm:pl-13 sm:text-base">
                {item.content.map((content) => (
                  <li key={content}>{content}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}