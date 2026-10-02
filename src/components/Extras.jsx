import { useEffect, useRef, useState } from "react";
import { REDUCED } from "../hooks";

export function ScrollBar() {
  const bar = useRef();
  useEffect(() => {
    const f = () => { bar.current.style.transform = `scaleX(${scrollY / (document.documentElement.scrollHeight - innerHeight)})`; };
    addEventListener("scroll", f, { passive: true });
    f();
    return () => removeEventListener("scroll", f);
  }, []);
  return <div className="bar" ref={bar} />;
}

export function BackToTop() {
  const [v, setV] = useState(false);
  useEffect(() => {
    const f = () => setV(scrollY > 700);
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return <button id="up" className={v ? "v" : ""} aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" })}>↑</button>;
}
