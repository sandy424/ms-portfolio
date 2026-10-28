import Career from "./Career";

export default function History() {
  return (
    <section className="w-full bg-white px-4 py-14 text-[#111418] sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1600px] min-w-0 flex-col">
        <span className="mb-10 text-4xl font-bold tracking-tight sm:mb-14 sm:text-5xl">Background</span>
        <div className="contents">
          <div className="order-1 grid min-w-0 grid-cols-[160px_minmax(0,1fr)] gap-8 border-t border-[#E6E8EB] py-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-14 max-[720px]:grid-cols-1 max-[720px]:gap-5">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">학력</h2>

            <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] max-[720px]:grid-cols-1">
              <p className="mb-2 text-[26px] sm:text-3xl font-bold [overflow-wrap:anywhere]">인제대학교</p>
              <p className="col-start-1 text-base text-[#5B626B]">AI소프트웨어학부</p>
              <p className="col-start-2 row-start-1 text-right text-[15px] text-[#5B626B] max-[720px]:col-start-1 max-[720px]:row-start-auto max-[720px]:mt-4 max-[720px]:text-left">2023.03 - 2027.02</p>
              <hr className="hidden" />
              <div className="col-span-full mt-6 flex items-center gap-2 text-[15px] text-[#5B626B]">
                <p>학점</p>
                <p>
                  <span className="font-medium text-[#3A4048]">3.94</span> / 4.5
                </p>
              </div>
            </div>
          </div>

          <div className="order-3 grid min-w-0 grid-cols-[160px_minmax(0,1fr)] gap-8 border-t border-[#E6E8EB] py-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-14 max-[720px]:grid-cols-1 max-[720px]:gap-5">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">교육 및 자격</h2>

            <div className="min-w-0">
              <ul className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1 [&>li]:flex [&>li]:min-w-0 [&>li]:flex-wrap [&>li]:items-center [&>li]:justify-between [&>li]:gap-x-3 [&>li]:gap-y-1 [&>li]:rounded-xl [&>li]:border [&>li]:border-[#E6E8EB] [&>li]:px-5 [&>li]:py-5 [&>li]:text-base [&>li]:font-medium [&>li]:[overflow-wrap:anywhere]">
                <li><span>ITQ</span><span className="text-[13px] font-normal text-[#5B626B]">  |  2022</span></li>
                <li><span>GTQ 1급</span><span className="text-[13px] font-normal text-[#5B626B]">  |  2022</span></li>
                <li><span>정보기기운용기능사</span><span className="text-[13px] font-normal text-[#5B626B]">  |  2022</span></li>
                
              </ul>
            </div>
          </div>
        </div>

        <Career />
      </div>
    </section>
  );
}