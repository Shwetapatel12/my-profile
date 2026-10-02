import { useState } from "react";
import { KEYS, PROJECTS } from "../data";

const FILTERS = [["all", "All"], ["ams", "AMS support"], ["odata", "OData and BI"], ["auto", "Automation"]];
const LIMIT = 150;

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(-1);

  return (
    <section id="projects">
      <h2 className="rv">SAP projects</h2>
      <div className="fl">
        {FILTERS.map(([k, label]) => (
          <button key={k} className={filter === k ? "on" : ""} onClick={() => setFilter(k)}>{label}</button>
        ))}
      </div>
      <div id="pr">
        {PROJECTS.map(([name, tag, text], i) => {
          const long = text.length > LIMIT, full = open === i || !long;
          return (
            <div className="row rv" key={name} style={{ display: filter === "all" || KEYS[i].includes(filter) ? "" : "none" }}>
              <h3>{name}</h3>
              <div>
                <span className="chip">{tag}</span>
                <p>
                  {full ? text : text.slice(0, LIMIT - 10).trim() + "…"}
                  {long && <button className="more" onClick={() => setOpen(open === i ? -1 : i)}>{full ? "Show less" : "Read more"}</button>}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
