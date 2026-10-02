import { useEffect } from "react";
import { useReveal, useStored } from "./hooks";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { ScrollBar, BackToTop } from "./components/Extras";

export default function App() {
  const [pal, setPal] = useStored("pal", "blue");
  const [theme, setTheme] = useStored("theme", "auto"); // auto | light | dark

  useEffect(() => { document.documentElement.classList.add("js"); }, []);
  useEffect(() => { document.documentElement.dataset.p = pal; }, [pal]);
  useEffect(() => {
    const d = document.documentElement;
    if (theme === "auto") delete d.dataset.theme; else d.dataset.theme = theme;
  }, [theme]);
  useReveal();

  const toggleTheme = () => {
    const dark = theme === "dark" || (theme === "auto" && matchMedia("(prefers-color-scheme:dark)").matches);
    setTheme(dark ? "light" : "dark");
  };

  return (
    <>
      <a className="skip" href="#skills">Skip to content</a>
      <ScrollBar />
      <Navbar pal={pal} setPal={setPal} toggleTheme={toggleTheme} />
      <main className="wrap">
        <Hero />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Contact />
      <BackToTop />
    </>
  );
}
