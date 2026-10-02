import { useState } from "react";
import { LINKS } from "../data";

export default function Contact() {
  const [toast, setToast] = useState("");
  const say = (m) => { setToast(m); setTimeout(() => setToast(""), 2200); };

  const copy = async () => {
    try { await navigator.clipboard.writeText(LINKS.email); say("Email copied"); }
    catch { say("Copy failed. Email: " + LINKS.email); }
  };
  // opens the visitor's email app with the message filled in
  const send = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `${f.get("message")}\n\n${f.get("name")}\n${f.get("email")}`;
    location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent("Portfolio message from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <footer id="contact">
      <div className="wrap cgrid">
        <div>
          <h2>Let's talk</h2>
          <p>Jabalpur, Madhya Pradesh, India</p>
          <div className="l">
            <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            <a href={`tel:${LINKS.phone}`}>+91-7879258597</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <button id="cp" onClick={copy}>Copy email</button>
        </div>
        <form className="cf" onSubmit={send}>
          <input name="name" placeholder="Your name" aria-label="Your name" required />
          <input name="email" type="email" placeholder="Your email" aria-label="Your email" required />
          <textarea name="message" rows="4" placeholder="Your message" aria-label="Your message" required />
          <button type="submit">Send message</button>
        </form>
      </div>
      <div id="ts" className={toast ? "v" : ""} role="status">{toast}</div>
    </footer>
  );
}
