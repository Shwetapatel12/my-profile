import { useEffect, useRef, useState } from "react";
import { REDUCED } from "../hooks";

export default function Count({ n, s = "" }) {
  const ref = useRef();
  const [v, setV] = useState(REDUCED ? n : 0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (REDUCED) return setV(n);
      const t0 = performance.now();
      const f = (t) => {
        const p = Math.min((t - t0) / 1400, 1);
        setV(Math.round(n * (1 - (1 - p) ** 3)));
        if (p < 1) requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    }, { threshold: 0.6 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [n]);
  return <b ref={ref}>{v}{s}</b>;
}
