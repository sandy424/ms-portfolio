export default function AboutMe() {
  return (
    <section className="flex min-h-screen w-full items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-[1600px]">
        <p className="text-lg font-medium tracking-tight tracking-wide text-gray-600 sm:text-xl">
          Frontend Developer
        </p>
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
          About Me : Always Growing
        </h1>

        <div className="mt-16">
            <div className="space-y-8 text-lg leading-loose">
            <p>안녕하세요.</p>
            <p>
              저는 다양한 프로젝트와 플랫폼을 경험하며 <span className="font-bold text-pink-500">사용자가 이용하는 과정과 경험</span>을 설계하는 일에 <br className="hidden sm:block" />
              흥미를 느껴 프론트엔드 개발에 관심을 갖게 되었습니다.
            </p>
            <p>
              React와 TypeScript를 활용하여 웹 서비스를 개발하며, 기능 구현뿐만 아니라 직관적인 UI와
              사용성을 함께 고민하고 있습니다.
            </p>
            <p>
              대학생활 4년동안 협업의 가치를 배우고, <span className="font-bold text-pink-500">새로운 환경에 도전하는 즐거움</span>을 경험했습니다. <br className="hidden sm:block" />
              익숙한 것에 머무르기보다 스스로 새로운 목표를 세우고 이를 하나씩 실현하며 <span className="font-bold text-pink-500">꾸준히 성장하는</span> 개발자가 되고자 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}