export type ProjectType = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  period: string;  //기간
  form: string;  //형태
  role: string;  //역할
  picture: string;
};

export const projects: ProjectType[] = [
  {
    slug: "ezread",
    title: "EZREAD (졸업작품)",
    description: "문해력에 어려움이 있는 사용자를 위한 OCR 기반 텍스트 변환 서비스 개발",
    tech: ["React", "Typescript", "Vite", "OCR", "Tailwind CSS"],
    period: "2026.03 ~ 2026.05",
    form: "팀 프로젝트",
    role: "Frontend",
    picture: "/ezread.png",
  },
  {
    slug: "keung-keung",
    title: "keung-keung (킁킁)",
    description: "디저트 유목인들을 위한 디저트 전문 지도 웹 서비스 개발",
    tech: ["React", "Javascript", "Vite", "Naver Maps API", "Tailwind CSS"],
    period: "2026.02 ~",
    form: "팀 프로젝트",
    role: "Frontend",
    picture: "/keung.png",
  },
];

