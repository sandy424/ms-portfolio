import TerminalTyping from "./TerminalTyping";

export default function Intro() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-center gap-8 xl:flex-row xl:justify-between">
        <div className="flex flex-col gap-4 text-center xl:max-w-[46rem] xl:text-left">
          <h1 className="mb-4 text-3xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-[4rem]">
            프론트엔드 개발자를 목표로 하는
            강민서입니다.
          </h1>
          <p className="text-base font-medium leading-relaxed text-gray-600 sm:text-xl">
            사용자가 쉽게 이해하고 편리하게 사용할 수 있는<br className="hidden sm:block" />
            웹서비스를 만드는 것을 좋아합니다.
          </p>
        </div>
        <div className="w-full max-w-full xl:w-auto xl:max-w-[560px] xl:flex-1">
          <TerminalTyping />
        </div>
      </div>
    </section>
  );
}