import Header from "../components/Header";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto w-full max-w-2xl">
        <Header />
      </div>
      <Intro />
    </main>
  );
}
