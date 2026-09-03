import Career from "./Career";

export default function History() {
    return (
        <section className="flex min-h-screen w-full items-center justify-center px-5 py-10 sm:px-8 sm:py-14">
            <div className="mx-auto w-full max-w-[1600px] px-28 flex gap-10 justify-center">
                <div className="flex flex-col gap-8 w-2xl">
                    <div className="border border-transparent bg-black/5 duration rounded-2xl p-10">
                        <h2 className="text-3xl font-bold ">학력</h2>

                        <div className="m-8 flex flex-col">
                            <p className="text-xl font-semibold">인제대학교</p>
                            <p className="text-lg text-gray-500 font-semibold">AI소프트웨어학부</p>
                            <p className="text-lg text-gray-500 font-semibold tracking-wide pt-6">2023.03 - 2027.02</p>
                            <hr className="mt-10 flex-1 border-0 border-t border-gray-300" />
                            <div className="flex justify-between mt-6 px-8 text-lg font-semibold text-gray-500 tracking-wide">
                                <p>학점</p>
                                <p><span className="font-bold text-blue-600">3.94</span> / 4.5</p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-transparent bg-black/5 duration rounded-2xl p-10">
                        <h2 className="text-3xl font-bold">교육 및 자격</h2>

                        <div className="m-12 flex justify-between gap-10">
                            <ul className="list-disc list-inside font-medium space-y-5 text-lg flex flex-col justify-center">
                                <li>ITQ</li>
                                <li>GTQ 1급</li>
                                <li>정보기기운용기능사</li>
                            </ul>
                            <img className="" src="/Education.png" alt="education" />
                        </div>
                    </div>
                </div>

                <Career />
            </div>
        </section>
    );
}