export type ProjectType = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  role: string;
  period: string;
  form: string;
  picture: string;
  /** 배포된 사이트 주소. 없으면 버튼을 숨긴다. */
  url?: string;
  /** GitHub 저장소 주소. 비공개 프로젝트는 비워 둔다. */
  github?: string;
};
