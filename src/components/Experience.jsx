import { useEffect, useRef } from "react";
import { EXP } from "../data";

export default function Experience() {
  const tl = useRef();
  useEffect(() => {
    const grow = () => {
      const r = tl.current.getBoundingClientRect();
      tl.current.style.setProperty("--g", Math.max(0, Math.min(1, (innerHeight * 0.8 - r.top) / r.height)));
    };
    addEventListener("scroll", grow, { passive: true });
    grow();
    return () => removeEventListener("scroll", grow);
  }, []);

  return (
    <section id="experience">
      <h2 className="rv">Experience</h2>
      <div className="tl" ref={tl}>
        {EXP.map(([title, org, when, pts]) => (
          <div className="row rv" key={title}>
            <div><h3>{title}</h3><small>{org}</small><small>{when}</small></div>
            <ul>{pts.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
