import Header from "../components/Header";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <Header />
      <Intro />
    </main>
  );
}
