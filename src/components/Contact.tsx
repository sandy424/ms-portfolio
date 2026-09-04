export default function Contact() {
  return(
    <section className="relative overflow-hidden h-auto w-full items-center justify-center px-4 py-28 sm:px-6 sm:py-14 lg:px-8 lg:py-40">
      {/* 배경 블러 */}
      <div className="absolute -top-16 -right-10 w-56 h-56 bg-blue-200 opacity-60 blur-3xl"/>
      {/* 배경 블러 2 */}
      <div className="absolute -bottom-12 -left-8 w-44 h-44 rounded-full bg-green-200 opacity-60 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1600px] flex flex-col items-center justify-center">
        <h3 className="text-base font-semibold">THANK YOU FOR READING</h3>
        <h1 className="mt-4 text-xl font-bold sm:text-2xl">읽어주셔서 감사합니다</h1>

        <div className="mt-10 border border-gray-200 rounded-lg p-6 sm:p-8 shadow-md w-full max-w-[500px]">
          <div className="flex items-center">
            <img src="/contact.png" alt="contact" className="w-10 h-10 bg-blue-200 rounded-md p-2" />
            <span className="ml-4 text-2xl font-bold">Contact Me</span>
          </div>

          <div className="mt-8 flex flex-col space-y-6">
            <div className="pl-8 flex items-center">
              <img src="/mail.png" alt="email" className="w-6 h-6 opacity-70" />
              <a href="mailto:ming9boo@gmail.com" className="ml-4 hover:underline">
                ming9boo@gmail.com
              </a>
            </div>
            <div className="pl-8 flex items-center">
              <img src="/github.png" alt="GitHub" className="w-6 h-6 opacity-70" />
              <a href="https://github.com/sandy424" target="_blank" rel="noopener noreferrer" className="ml-4 hover:underline">
                github.com/sandy424
              </a>
            </div>
          </div>

          {/* 이력서 다운로드 버튼 */}
          <a href="/강민서 이력서.pdf"
            download
            className="mt-8 block w-full text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            이력서 다운로드
          </a>
        </div>
      </div>
    </section>
  )
}