import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Marquee from "@/app/components/Marquee";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Credentials from "@/app/components/Credentials";
import Contact from "@/app/components/Contact";
import Reveal from "@/app/components/Reveal";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee text="Web Development • Laravel • Next.js • WordPress • IT Support" />
      <Reveal variant="rise">
        <Projects />
      </Reveal>
      <Reveal variant="slideLeft">
        <Skills />
      </Reveal>
      <Experience />
      <Reveal variant="zoom">
        <Credentials />
      </Reveal>
      <Reveal variant="drop">
        <Contact />
      </Reveal>
      <Marquee text="Available for Full-time &amp; Freelance Opportunities" />
    </main>
  );
}
