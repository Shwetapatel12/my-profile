import { useEffect, useState } from "react";
import { REDUCED } from "../hooks";

const WORDS = ["ALV reports", "OData services", "BDC and BAPI automation", "User exits and enhancements", "Real-time BI dashboards"];

export default function Typed() {
  const [txt, setTxt] = useState(WORDS[0]);
  useEffect(() => {
    if (REDUCED) return;
    let w = 0, c = 0, del = false, id;
    const tick = () => {
      const s = WORDS[w];
      c += del ? -1 : 1;
      setTxt(s.slice(0, c));
      let ms = del ? 35 : 70;
      if (!del && c === s.length) { del = true; ms = 1500; }
      else if (del && c === 0) { del = false; w = (w + 1) % WORDS.length; ms = 300; }
      id = setTimeout(tick, ms);
    };
    tick();
    return () => clearTimeout(id);
  }, []);
  return <>{txt}</>;
}
