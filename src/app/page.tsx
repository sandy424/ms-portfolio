import Header from "../components/Header";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <div className="mx-auto w-full max-w-2xl px-5 pt-10 sm:px-8 sm:pt-14">
        <Header />
      </div>
      <div className="flex flex-1">
        <Intro />
      </div>
      <AboutMe />
    </main>
  );
}
