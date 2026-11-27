// 사람인 이력서(2026.11 기준) 내용을 기반으로 정리한 프로필 데이터

export const profile = {
  name: "강민서",
  englishName: "Kang Minseo",
  role: "Frontend Developer",
  email: "sandy424@naver.com",
  github: "https://github.com/sandy424",
  resume: "/이력서.pdf",
};

export type Highlight = {
  value: string;
  label: string;
};

export type Strength = {
  keyword: string;
  title: string;
  description: string;
};

// 자기소개서(직무 경험 · 장점 · 팀워크 · 단점 극복)를 바탕으로, 일할 때의 태도 중심으로 정리
export const strengths: Strength[] = [
  {
    keyword: "User Perspective",
    title: "사용자의 입장에서 먼저 써 봅니다",
    description:
      "만든 화면을 직접 사용해 보며 처음 방문한 사람도 헷갈리지 않는지 확인합니다. 불편한 지점을 찾으면 그냥 넘기지 않고 개선 방향까지 정리합니다.",
  },
  {
    keyword: "Feedback Loop",
    title: "피드백은 다음 결과물로 답합니다",
    description:
      "부족하다는 의견을 들으면 더 나은 결과물을 만드는 과정으로 받아들입니다. 한 번 받은 피드백은 다음 작업에도 적용해 같은 부분을 다시 지적받지 않도록 합니다.",
  },
  {
    keyword: "Clear Communication",
    title: "모두가 헷갈리지 않게 정리합니다",
    description:
      "논의한 내용과 결정된 사항을 업무별로 나눠 정리하고 공유합니다. 각자 무엇을 해야 하는지 분명할 때 협업이 빨라진다고 생각합니다.",
  },
  {
    keyword: "Proactive",
    title: "궁금한 건 먼저 묻습니다",
    description:
      "분위기를 살피느라 말을 아끼던 때도 있었지만, 지금은 필요한 내용을 직접 질문하고 동료에게 먼저 의견을 구합니다. 먼저 다가가는 소통도 배려만큼 중요하다는 걸 배웠습니다.",
  },
];

export type StackItem = {
  name: string;
  icon?: string;
};

export const stackGroups: { title: string; items: StackItem[] }[] = [
  {
    title: "Language",
    items: [
      { name: "TypeScript", icon: "/typescript.png" },
      { name: "JavaScript", icon: "/javascript.png" },
      { name: "Java" },
    ],
  },
  {
    title: "Framework & Library",
    items: [
      { name: "React", icon: "/react.png" },
      { name: "Next.js", icon: "/nextjs.png" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Tools & Collaboration",
    items: [
      { name: "Figma", icon: "/figma.png" },
      { name: "Git / GitHub", icon: "/github.png" },
      { name: "Notion", icon: "/notion.png" },
      { name: "Slack", icon: "/slack.svg" },
      { name: "Claude", icon: "/claude.svg" },
    ],
  },
];

export type ExperienceGroup = {
  title?: string;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  type: string;
  period: string;
  current?: boolean;
  metrics?: Highlight[];
  groups: ExperienceGroup[];
};

export const experiences: Experience[] = [
  {
    company: "공감오래콘텐츠",
    role: "인턴 · 기획 / 프론트엔드",
    type: "현장실습",
    period: "2026.09 ~ 재직중",
    current: true,
    metrics: [
      { value: "74%", label: "개발 기간 단축" },
      { value: "150명+", label: "행사 참여 목표 초과" },
    ],
    groups: [
      {
        title: "게임 개발 커뮤니티 프론트엔드 개발",
        items: [
          "게임 개발 커뮤니티 웹사이트의 프론트엔드 개발 및 UI 개선 담당",
          "사용자 관점에서 웹사이트를 테스트하고 사용성·편의성 향상을 위한 개선 사항 도출",
          "서비스에 필요한 기능 및 보완 사항을 제안해 웹사이트 완성도 향상에 기여",
          "AI 도구를 활용한 개발 및 개선 작업으로 개발 기간 74% 단축에 기여",
        ],
      },
      {
        title: "행사 기획 및 마케팅",
        items: [
          "행사 기획 보조·운영 지원, 홍보 콘텐츠 작성, 온·오프라인 홍보 채널 발굴",
          "홍보 협력 기관 섭외 및 참여자 모집을 위한 홍보 활동 진행",
          "게임 가족 행사에서 목표 참여 인원 150명을 초과 달성",
        ],
      },
    ],
  },
  {
    company: "예이린사회적협동조합",
    role: "개발 PM",
    type: "프리랜서",
    period: "2026.04 ~ 2026.05",
    groups: [
      {
        items: [
          "플랫폼 '플로비' 개발 초기 단계에서 관계자 의견을 취합하고 요구사항을 정리해 서비스 기획 초안 수립 지원",
          "기관 담당자·파견 전문가의 요구사항을 정리해 개발자에게 전달하며 원활한 의사소통 지원",
          "회의 주요 논의·결정 사항을 디지털 문서로 기록·관리해 프로젝트 진행 현황 공유",
          "요구사항 및 수정 의견을 체계적으로 전달해 개발 수정안이 원활히 진행되도록 기여",
        ],
      },
    ],
  },
];

export const education = {
  school: "인제대학교 (김해)",
  major: "AI소프트웨어학부",
  period: "2023.03 ~ 2027.02",
  status: "졸업예정",
  gpa: "3.94",
  gpaMax: "4.5",
};

export const activity = {
  title: "컴퓨터AI대학 단과대 학생회",
  org: "인제대학교",
  period: "2023.03 ~ 2025.12",
  path: ["문화국 차장", "사무국 국장", "단과대 학생회장"],
  items: [
    "23명 규모 학생회를 이끌며 MT·체육대회·대축제·E스포츠대회 등 행사 기획·운영",
    "학우 의견을 정기적으로 수렴해 학교·학과와 소통하고 행사 일정과 행정 업무 조율",
    "운영 일정 관리와 역할 분배로 구성원 간 협업 조율, 예산·문서 관리 총괄",
  ],
};

export type Certification = {
  name: string;
  detail?: string;
  issuer: string;
  date: string;
};

export const certifications: Certification[] = [
  {
    name: "TOEIC Speaking",
    detail: "IM2 (120점)",
    issuer: "YBM",
    date: "2026.08",
  },
  { name: "정보기기운용기능사", issuer: "한국산업인력공단", date: "2022.12" },
  { name: "GTQ 그래픽기술자격", detail: "1급", issuer: "한국생산성본부", date: "2022.09" },
  { name: "ITQ 아래한글", detail: "A등급", issuer: "한국생산성본부", date: "2022.06" },
  { name: "ITQ 한글엑셀", detail: "A등급", issuer: "한국생산성본부", date: "2022.06" },
  { name: "ITQ 한글파워포인트", detail: "A등급", issuer: "한국생산성본부", date: "2022.06" },
];
