import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="rv">Skills</h2>
      {SKILLS.map(([g, items]) => (
        <div className="row rv" key={g}>
          <h3>{g}</h3>
          <div className="chips">{items.split(", ").map((x) => <span key={x}>{x}</span>)}</div>
        </div>
      ))}
    </section>
  );
}
