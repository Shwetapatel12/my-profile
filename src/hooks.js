import { useEffect, useState } from "react";

export const REDUCED = matchMedia("(prefers-reduced-motion:reduce)").matches;

// like useState, but remembers the value in the browser
export function useStored(key, fallback) {
  const [v, setV] = useState(() => {
    try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
  });
  useEffect(() => { try { localStorage.setItem(key, v); } catch { /* ignore */ } }, [key, v]);
  return [v, setV];
}

// fades in every element with class "rv" when it scrolls into view
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((x) => {
      if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); }
    }), { threshold: 0.15 });
    document.querySelectorAll(".rv").forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}
