import Career from "./Career";

export default function History() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-center">
        <div className="flex w-full flex-col gap-8 lg:max-w-[720px]">
          <div className="rounded-2xl border border-transparent bg-black/5 p-6 sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">학력</h2>

            <div className="mt-8 flex flex-col gap-4 sm:m-8 sm:mt-8">
              <p className="text-xl font-semibold">인제대학교</p>
              <p className="text-lg font-semibold text-gray-500">AI소프트웨어학부</p>
              <p className="pt-2 text-lg font-semibold tracking-wide text-gray-500 sm:pt-6">2023.03 - 2027.02</p>
              <hr className="mt-6 flex-1 border-0 border-t border-gray-300 sm:mt-10" />
              <div className="mt-6 flex items-center justify-between gap-3 text-base font-semibold tracking-wide text-gray-500 sm:px-8 sm:text-lg">
                <p>학점</p>
                <p>
                  <span className="font-bold text-blue-600">3.94</span> / 4.5
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-transparent bg-black/5 p-6 sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">교육 및 자격</h2>

            <div className="mt-8 flex items-center justify-between gap-3 sm:m-12 sm:mt-8 sm:gap-10">
              <ul className="list-disc list-inside space-y-2 text-sm font-medium sm:space-y-5 sm:text-lg">
                <li>ITQ  |  2022</li>
                <li>GTQ 1급  |  2022</li>
                <li>정보기기운용기능사  |  2022</li>
                <li>정보처리기사 취득 예정  | 실기 준비 중</li>
              </ul>
              <img
                className="h-auto w-[90px] shrink-0 rounded-xl object-cover sm:w-[110px] lg:w-[120px]"
                src="/Education.png"
                alt="education"
              />
            </div>
          </div>
        </div>

        <Career />
      </div>
    </section>
  );
}