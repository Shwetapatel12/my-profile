import { LINKS } from "../data";

export default function Education() {
  return (
    <section>
      <h2 className="rv">Education and more</h2>
      <div className="row rv"><h3>2020 – 2024</h3><p><b>B.Tech, Computer Science and Engineering</b><br />Shri Ram Institute of Technology, Jabalpur. CGPA 8.4.</p></div>
      <div className="row rv"><h3>Certification</h3><p>SAP ABAP, OOPS, CROSSAPP, WebDynpro, Workflow, ABAP on HANA – Udemy, 206 hours. <a className="cl" href={LINKS.cert} target="_blank" rel="noopener noreferrer">View certificate</a></p></div>
      <div className="row rv"><h3>Beyond work</h3><ul><li>State-level basketball player, gold medalist</li><li>NCC cadet, rock climbing camp at national level (4MPCTR-2024)</li></ul></div>
    </section>
  );
}
