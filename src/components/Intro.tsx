import TerminalTyping from "./TerminalTyping";

export default function Intro() {
  return (
    <section className="flex w-full flex-1 items-center justify-center py-4 sm:py-8">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-center gap-8 xl:flex-row xl:justify-between px-18">
        <div className="flex flex-col gap-4 xl:max-w-[46rem]">
          <h1 className="mb-4 text-3xl font-bold leading-snug tracking-tight sm:text-4xl">
            프론트엔드 개발자를 목표로 하는 <br />
            강민서입니다.
          </h1>
          <p className="text-base font-medium leading-relaxed text-gray-600">
            사용자가 쉽게 이해하고 편리하게 사용할 수 있는<br />
            웹서비스를 만드는 것을 좋아합니다.
          </p>
        </div>
        <div className="w-full xl:w-auto xl:max-w-[560px] xl:flex-1">
          <TerminalTyping />
        </div>
      </div>
    </section>
  );
}