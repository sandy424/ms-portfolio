import Link from "next/link";
import Image from "next/image";
import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type Functions = {
  feature: string;
  picture: string;
}

type ParItem = {
  label: "PROBLEM" | "ACTION" | "RESULT";
  labelColor: string;
  content: string | string[];
}

const functionItems: Functions[] = [
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
]

const technicalChallenge: ParItem[] = [
  {
    label: "PROBLEM",
    labelColor: "bg-amber-100 text-amber-700",
    content:
      "백엔드 API 연동 과정에서 useEffect와 fetch/axios로 초기 데이터를 불러오도록 구현했으나, 컴포넌트 리렌더링 시 불필요한 중복 네트워크 요청이 발생하고 통신 지연 시 빈 화면이 노출되는 UX 저하 문제가 있었습니다.",
  },
  {
    label: "ACTION",
    labelColor: "bg-yellow-100 text-yellow-700",
    content: [
      "isLoading, isError 상태를 분리 관리해 로딩 중엔 스켈레톤 UI를, 에러 시엔 토스트 메시지로 사용자 친화적 피드백 제공",
      "TypeScript로 API 응답 타입을 엄격히 정의하고 옵셔널 체이닝을 적용해 런타임 에러 방지",
      "React Query를 도입해 캐싱 및 중복 요청 최적화 진행",
    ],
  },
  {
    label: "RESULT",
    labelColor: "bg-emerald-100 text-emerald-700",
    content:
      "불필요한 API 호출을 줄이고 안정적인 에러 핸들링을 구축함으로써, 네트워크 환경이 불안정한 상황에서도 비정상 종료 없이 부드러운 사용자 경험을 제공할 수 있도록 개선했습니다.",
  },
];

// projects 배열을 순회하면서 같은 객체 배열을 반환한다.
export function generateStaticParams() {
  return projects.map((p) => ({slug: p.slug}));  // 결과: [{ slug: "ezread" }, { slug: "keung-keung" }]
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-10">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
      >
        <ArrowLeft className="w-4 h-4" />
        프로젝트 목록으로
      </Link>

      <div className="mt-12 min-w-0 sm:mt-18">
        <h1 className="break-words text-3xl font-bold sm:text-4xl lg:text-5xl">{project.title}</h1>
        <p className="mt-4 break-words text-base leading-relaxed text-gray-500 sm:text-lg">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-3">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-600"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={project.url} className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-2 sm:justify-start">
            <img src="/link.png" alt="" className="w-6 h-6" />
            <span className="text-white">라이브 데모</span>
          </a>
          <a href={project.github} className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 sm:justify-start">
            <img src="/github.png" alt="" className="w-6 h-6" />
            <span>깃허브</span>
          </a>
          <p className="break-words text-sm font-semibold text-gray-500">{project.period} | {project.form}</p>
        </div>

        <Image
          src={project.picture}
          alt={project.title}
          width={1200}
          height={675}
          className="mt-8 aspect-[21/9] w-full rounded-2xl object-cover sm:mt-10"
        />

        {/* 설명 */}
        <div className="px-1 py-8 sm:p-4 sm:pt-16 ">
          <h2 className="text-3xl font-bold">왜 만들었나</h2>
          <p className="mt-6 text-lg text-gray-600 font-base break-words leading-relaxed">문명의 발전으로 독해 수준이 점차 떨어지는 일상에서, 흔히 마주치는 글이 누군가에게는 큰 장벽으로 다가올 수 있다는 문제의식이 있었습니다. 문서를 올리면 짧고 간단한 말로 다시 써주는 서비스를 목표로 했습니다.</p>
          <hr className="my-16 border-gray-200" />

          <h2 className="text-3xl font-bold">핵심 기능</h2>
          <div className="m-0 mt-4 grid grid-cols-2 gap-3 sm:m-8 sm:grid-cols-4 sm:gap-4">
            {functionItems.map((item) => (
              <div
                key={item.feature}
                className="flex min-w-0 flex-col items-center justify-center gap-3 rounded-lg border border-gray-300 px-2 py-4 text-center transition-colors sm:px-4 sm:py-5"
              >
                <img src={item.picture} alt={item.feature} className="h-10 w-10 object-contain" />
                <p className="text-base font-medium text-gray-700">{item.feature}</p>
              </div>
            ))}
          </div>
          <hr className="my-16 border-gray-200" />
          
          <h2 className="text-3xl font-bold">기술적으로 고민한 지점</h2>
          <div>
            <div className="mt-8 space-y-10">
              {technicalChallenge.map((item) => (
                <div key={item.label}>
                  <span
                    className={`inline-block rounded px-3 py-1.5 text-xs font-semibold ${item.labelColor}`}
                  >
                    {item.label}
                  </span>

                  {Array.isArray(item.content) ? (
                    <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {item.content.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}