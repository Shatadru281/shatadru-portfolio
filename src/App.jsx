import { MotionConfig } from "motion/react";
import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Background from "./sections/Background";
import Contact from "./sections/Contact";
import useScrollScenes from "./hooks/useScrollScenes";

export default function App() {
  useScrollScenes();
  return (
    <MotionConfig reducedMotion="user">
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Background />
        <Contact />
      </main>
    </MotionConfig>
  );
}
