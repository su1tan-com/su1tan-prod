import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
import Awards from "../components/Awards";
import Recommendations from "../components/Recommendations";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Stack />
        <Awards />
        <Recommendations />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
