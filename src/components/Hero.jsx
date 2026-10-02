import { useRef } from "react";
import Typed from "./Typed";
import { LINKS } from "../data";
import photo from "../assets/profile.jpg";

const BASE = import.meta.env.BASE_URL;

export default function Hero() {
  const hero = useRef(), pf = useRef();

  const onMove = (e) => {
    const r = hero.current.getBoundingClientRect();
    hero.current.style.setProperty("--mx", e.clientX - r.left + "px");
    hero.current.style.setProperty("--my", e.clientY - r.top + "px");
  };
  // subtle 3D tilt on the photo
  const tilt = (e) => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const r = pf.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    pf.current.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };
  const untilt = () => { pf.current.style.transform = ""; };

  return (
    <header className="hero" ref={hero} onPointerMove={onMove}>
      <div>
        <h1>Shweta Patel</h1>
        <p className="role">SAP ABAP Developer</p>
        <p className="typ">I work on <span><Typed /></span><i className="cur" /></p>
        <p className="s">I build custom reports, ALV outputs, OData services and BDC/BAPI automations across SAP FI, MM and PP. I have closed 100+ AMS support tickets for global clients and built OData services on PostgreSQL that feed live BI dashboards. Earlier full-stack work in Java, Python and React helps me debug faster and work with teams outside SAP.</p>
        <a className="btn fill" href={`mailto:${LINKS.email}`}>Email me</a>
        <a className="btn" href="#projects">See my work</a>
        <a className="btn" href={`${BASE}shweta_patel_cv.pdf`} download="Shweta_Patel_CV.pdf">Download CV</a>
        <div className="soc">
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <div className="phw" onPointerMove={tilt} onPointerLeave={untilt}>
        <figure className="pf" ref={pf}>
          <img className="pic" src={photo} alt="Portrait of Shweta Patel" />
          <figcaption><b>Shweta Patel</b><span>SAP ABAP Developer</span></figcaption>
        </figure>
      </div>
    </header>
  );
}
