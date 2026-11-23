import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Background from "../components/Background";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Background />
      <Contact />
    </main>
  );
}
