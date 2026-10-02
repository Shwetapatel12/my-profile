import { useEffect, useState } from "react";

const NAV = ["skills", "experience", "projects", "contact"];
const PALETTES = ["blue", "yellow", "bwg"];

export default function Navbar({ pal, setPal, toggleTheme }) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let cur = "";
      document.querySelectorAll("section[id],footer[id]").forEach((s) => {
        if (s.getBoundingClientRect().top < innerHeight * 0.4) cur = s.id;
      });
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = "contact";
      setActive(cur);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav>
      <div className="wrap">
        <b>Shweta Patel</b>
        <div className={"links" + (open ? " open" : "")}>
          {NAV.map((n) => (
            <a key={n} href={`#${n}`} className={active === n ? "on" : ""} onClick={() => setOpen(false)}>
              {n[0].toUpperCase() + n.slice(1)}
            </a>
          ))}
        </div>
        <div className="pal" role="group" aria-label="Colour theme">
          {PALETTES.map((p) => (
            <button key={p} data-p={p} className={pal === p ? "on" : ""} aria-label={`${p} theme`} onClick={() => setPal(p)} />
          ))}
        </div>
        <button id="tg" aria-label="Toggle dark mode" onClick={toggleTheme}>◐</button>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
      </div>
    </nav>
  );
}
