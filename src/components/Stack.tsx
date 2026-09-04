export default function Stack() {
  return(
    <section className="flex h-auto w-full items-center justify-center px-4 py-30 sm:px-6 sm:py-14 lg:px-8 lg:py-40">
      <div className="mx-auto w-full max-w-[1600px] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-600 sm:text-3xl">기술 스택</h1>
        <div className="mt-16 flex items-center justify-center gap-6 sm:gap-8 lg:gap-25">
          <img src="/react.png" alt="React" className="w-12 h-12" />
          <img src="/nextjs.png" alt="Nextjs" className="w-12 h-12" />
          <img src="/typescript.png" alt="TypeScript" className="w-12 h-12" />
          <img src="/javascript.png" alt="JavaScript" className="w-12 h-12" />
          <img src="/figma.png" alt="Figma" className="w-12 h-12" />
        </div>
      </div>
    </section>
  )
}