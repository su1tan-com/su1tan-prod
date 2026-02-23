import Hero from "../components/Hero";
import About from "../components/About";
import Stack from "../components/Stack";

export default function AboutNavSection() {
  return (
    <section id="about" className="py-10">
        <Hero />
        <About />
        <Stack />
    </section>
  );
}
