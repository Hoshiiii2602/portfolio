import About from "@/components/About";
import BackgroundDecor from "@/components/BackgroundDecor";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
  return (
    <>
      <BackgroundDecor />
      <Navbar />
      <main className="relative z-10 overflow-x-clip">
        <Hero />
        <TechMarquee />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
