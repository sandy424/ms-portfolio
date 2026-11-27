import { ProjectType } from "../types/project";

export const projects: ProjectType[] = [
  {
    slug: "myme-creators-hub",
    title: "MYME CREATORS HUB",
    description: "게임 개발 크리에이터 커뮤니티 웹사이트 프론트엔드 개발 및 UI 개선",
    tech: [],
    role: "Frontend · UI 개선",
    period: "2026.09 ~",
    form: "현장실습 · 공감오래콘텐츠",
    picture: "/project/myme/home.png",
  },
  {
    slug: "ezread",
    title: "EZREAD (졸업작품)",
    description: "문해력에 어려움이 있는 사용자를 위한 OCR 기반 텍스트 변환 서비스 개발",
    tech: ["React", "Typescript", "Vite", "OCR", "Tailwind CSS"],
    role: "Frontend",
    period: "2026.03 ~ 2026.05",
    form: "팀 프로젝트",
    picture: "/ezread.png",
    url: "https://easyread-vite.vercel.app/",
    github: "https://github.com/sandy424/easyread-vite",
  },
  {
    slug: "keung-keung",
    title: "keung-keung (킁킁)",
    description: "디저트 유목인들을 위한 디저트 전문 지도 웹 서비스 개발",
    tech: ["React", "Javascript", "Vite", "Naver Maps API", "Tailwind CSS"],
    role: "Frontend",
    period: "2026.02 ~",
    form: "개인 프로젝트",
    picture: "/keung.png",
    url: "https://keung-keung.vercel.app/",
    github: "https://github.com/sandy424/keung-keung",
  },
];
