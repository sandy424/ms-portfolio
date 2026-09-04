type SkillType = {
  picture: string;
  name: string;
  englishName: string;
  description: string;
}

const skillsData: SkillType[] = [
  {
    picture: "/user.png",
    name: "사용자 중심 문제 해결",
    englishName: "User-Centered Problem Solving",
    description: "사용자의 불편을 발견하고 개선 방향을 고민하며, 기획부터 배포·유지보수까지 전 과정을 직접 수행합니다.",
  },
  {
    picture: "/aim.png",
    name: "끝까지 완결하는 실행력",
    englishName: "Responsible execution ability",
    description: "지도 API 연동 제약을 우선순위 조정으로 해결하고 핵심 기능부터 배포했습니다. EZREAD에서는 Axios로 비동기 요청·응답을 안정적으로 처리했습니다.",
  },
  {
    picture: "/communication.png",
    name: "협업과 조율",
    englishName: "Collaboration and Coordination",
    description: "EZREAD 팀 프로젝트에서 요구사항 정의서를 공동 작성해 개발 범위를 구체화하고, Git으로 협업하며 REST API 연동을 담당했습니다.",
  },
];

export default function Skills() {
  return(
    <section className="flex h-auto w-full items-center justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1600px]">
        <h1 className="text-4xl font-bold sm:text-5xl">핵심 역량</h1>
        <p className="mt-6 text-lg font-medium tracking-tight text-gray-600 sm:text-xl">Key Skills</p>

        <div className="mt-18 flex flex-col items-center gap-6 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:items-stretch lg:justify-center lg:gap-6 xl:gap-12">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex h-full min-h-[250px] w-full max-w-[360px] flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-transform duration-200 hover:-translate-y-2 sm:p-7 lg:max-w-[380px] lg:flex-1"
            >
              <p className="mb-6 min-h-[120px] text-base font-medium leading-relaxed text-gray-800">{skill.description}</p>

              <div className="mt-auto flex items-center justify-center gap-4">
                <img className="h-12 w-12 shrink-0 object-cover" src={skill.picture} alt={skill.name} />
                <div className="min-w-0 pl-4">
                  <h2 className="text-xl font-bold leading-snug">{skill.name}</h2>
                  <p className="mt-1 text-base text-gray-500">{skill.englishName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}