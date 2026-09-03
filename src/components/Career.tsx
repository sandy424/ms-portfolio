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
]

export default function Career() {
  return(
    <div className="border border-transparent bg-black/5 duration rounded-2xl p-12 w-2xl">
      <h2 className="text-3xl font-bold">경력</h2>

      <div className="relative pl-7 mt-10 pb-10">
        {/* 선 */}
        <div className="absolute left-[6px] top-2 bottom-2 w-px bg-gray-300" />

          {careerData.map((item, index) => (
            <div
              key={item.company}
              className={index === careerData.length - 1 ? "relative" : "relative mb-9"}
            >
              {/* 원 */}
              <div className="absolute -left-7 top-1.5 w-3.5 h-3.5 rounded-full border border-gray-500 border-3 bg-gray-50" />

              <div className="flex items-center justify-between mb-4 pl-4">
                <span className="text-lg font-semibold text-gray-500 leading-loose">{item.period}</span>
                <span className="bg-green-100/50 text-sm font-semibold py-1.5 px-3 rounded-lg">{item.tag}</span>
              </div>

              <p className="text-2xl font-bold mb-6 pl-4">{item.company}</p>

              {item.content && (
                <ul className="list-disc text-base pl-13 space-y-2">
                  {item.content.map((content) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
                        
        </div>
      </div>
  )
}