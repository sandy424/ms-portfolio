import { ProjectType } from "../types/project";

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
    slideId: "1BuQbsPqTvkhQpRUFcJQJR6jeTWOneByJ",
    url: "https://easyread-vite.vercel.app/",
    github: "https://github.com/sandy424/easyread-vite",
    why: "문명의 발전으로 독해 수준이 점차 떨어지는 일상에서, 흔히 마주치는 글이 누군가에게는 큰 장벽으로 다가올 수 있다는 문제의식이 있었습니다. 문서를 올리면 짧고 간단한 말로 다시 써주는 서비스를 목표로 했습니다.",
    features: [
      {
        feature: "텍스트 요약",
        picture: "/project/ezread/text.png",
      },
      {
        feature: "쉽게 읽기",
        picture: "/project/ezread/book.png",
      },
      {
        feature: "회원 인증",
        picture: "/project/ezread/auth.png",
      },
      {
        feature: "사용 기록",
        picture: "/project/ezread/history.png",
      },
    ],
    technicalChallenge: [
    {
      title: "API 연동 시 중복 요청 및 로딩 UX 문제",
      items: [
        { label: "PROBLEM", content: "백엔드 API 연동 과정에서 useEffect와 fetch/axios로 초기 데이터를 불러오도록 구현했으나, 컴포넌트 리렌더링 시 불필요한 중복 네트워크 요청이 발생하고 통신 지연 시 빈 화면이 노출되는 UX 저하 문제가 있었습니다." },
        { label: "ACTION", content: [
          "isLoading, isError 상태를 분리 관리해 로딩 중엔 스켈레톤 UI를, 에러 시엔 토스트 메시지로 사용자 친화적 피드백 제공",
          "TypeScript로 API 응답 타입을 엄격히 정의하고 옵셔널 체이닝을 적용해 런타임 에러 방지",
          "React Query를 도입해 캐싱 및 중복 요청 최적화 진행",
        ]},
        { label: "RESULT", content: "불필요한 API 호출을 줄이고 안정적인 에러 핸들링을 구축함으로써, 네트워크 환경이 불안정한 상황에서도 비정상 종료 없이 부드러운 사용자 경험을 제공할 수 있도록 개선했습니다." },
      ],
    },
  ],
    retrospect: "백엔드 개발자와 직접 소통하며 백엔드의 개발 환경과 데이터 처리 과정을 이해할 수 있었고, 처음으로 프론트엔드 개발의 전반적인 과정을 경험해볼 수 있었다. 개발 과정에서 프론트엔드와 백엔드 간의 연동 과정에서 발생하는 충돌을 직접 고민하고 해결하면서 협업 과정에 대한 이해도 높일 수 있었다. 또한 기존에 부족하다고 느꼈던 UI 설계에도 적극적으로 고민하고 개선을 거듭한 결과, 이전보다 만족스러운 결과물을 완성할 수 있었다."
  },
  {
    slug: "keung-keung",
    title: "keung-keung (킁킁)",
    description: "디저트 유목인들을 위한 디저트 전문 지도 웹 서비스 개발",
    tech: ["React", "Javascript", "Vite", "Naver Maps API", "Tailwind CSS"],
    period: "2026.02 ~",
    form: "개인 프로젝트",
    role: "Frontend",
    picture: "/keung.png",
    slideId: "",
    url: "https://keung-keung.vercel.app/",
    github: "https://github.com/sandy424/keung-keung",
    why: `최근 디저트 트렌드가 빠르게 변화하면서 새로운 디저트와 맛집을 찾는 사람들이 많아지고 있습니다. 하지만 다양한 디저트 가게를 일일이 찾아다니며 정보를 확인하는 데에는 불편함이 있다고 느꼈습니다.

    이에 디저트를 찾아다니는 ‘디저트 유목민’을 위해 디저트 가게만 모아 한눈에 탐색할 수 있는 지도 기반 웹 서비스를 만들게 되었습니다. 사용자가 자신이 알고 있는 디저트 가게를 직접 등록하고 다른 사용자들과 공유하며, 댓글과 리뷰를 통해 다양한 가게의 정보를 함께 쌓아갈 수 있도록 기획했습니다.`,
    features: [
      { feature: "지도 탐색", picture: "/project/keung/map.png" },
      { feature: "회원 인증", picture: "/project/keung/auth.png" },
      { feature: "댓글", picture: "/project/keung/comment.png" },
      { feature: "찜하기", picture: "/project/keung/like.png" },
    ],
    technicalChallenge: [
      {
        title: "네이버 지도 API 연동",
        items: [
          { label: "PROBLEM", content: "네이버 지도 API를 처음 연동하는 과정에서 지도가 렌더링되지 않는 오류가 반복적으로 발생했고, 원인이 API 키 설정인지 인증 방식인지 파악하기 어려웠습니다." },
          { label: "ACTION", content: [
            "네이버 클라우드 플랫폼 콘솔에서 서비스 URL과 IP 등록 여부를 하나씩 재점검",
            "공식 문서와 AI 도구의 도움을 받아 오류 로그를 단계적으로 추적해 원인 범위를 좁힘",
          ]},
          { label: "RESULT", content: "API 키 발급부터 도메인 등록까지의 인증 흐름을 정확히 이해하게 되었고, 외부 API 연동 시 인증 설정을 체계적으로 점검하는 습관을 갖게 되었습니다." },
        ],
      },
      {
        title: "Firebase 기반 가게 등록 기능",
        items: [
          { label: "PROBLEM", content: "사용자가 직접 좋아하는 디저트 가게를 등록할 수 있는 기능을 추가하려 했으나, Firebase를 처음 사용하다 보니 데이터 구조 설계와 쓰기 권한(Rules) 설정에서 막혔습니다." },
          { label: "ACTION", content: [
            "Firebase 공식 문서를 참고해 회원 관리, 댓글, 찜하기 기능부터 먼저 구현하며 Firestore 구조에 익숙해짐",
            "가게 등록 기능은 보안 규칙과 데이터 검증 로직을 학습하며 단계적으로 설계 중",
          ]},
          { label: "RESULT", content: "Firebase를 처음 다뤄보며 인증, 실시간 데이터베이스, 보안 규칙의 기본 구조를 익혔고, 이를 바탕으로 사용자 등록 기능을 다음 단계로 고도화할 계획입니다." },
        ],
      },
    ],
    retrospect: `평소 만들어보고 싶었던 서비스를 직접 기획하고 개발하면서 아이디어를 실제 서비스로 구현하는 과정을 경험할 수 있었다. 특히 Firebase를 활용해 데이터를 직접 관리하고 기능을 구현해보면서 서비스의 전체적인 흐름을 이해할 수 있었고, 기획부터 개발까지 직접 진행하는 과정에서 큰 재미와 흥미를 느낄 수 있었다.
    
    Firebase를 처음 접하면서 러닝커브를 과소평가했던 점이 아쉬웠습니다. 다음에는 새 기술 스택을 쓰기 전에 공식 문서로 데이터 모델링을 먼저 설계하고 시작하려 합니다.`,
  },
];
