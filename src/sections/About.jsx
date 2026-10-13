import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "../components/Elements";
import { profile } from "../data/portfolio";
const statement =
  "Curiosity is the starting point. Building is how I make sense of it.";
export default function About() {
  return (
    <section
      id="about"
      className="about section-pad"
      aria-labelledby="about-title"
    >
      <div className="section-grid">
        <SectionLabel number="01">A little about me</SectionLabel>
        <div>
          <h2 id="about-title" className="about-statement">
            {statement.split(" ").map((word, i) => (
              <span key={i} className={`word ${i > 5 ? "serif-word" : ""}`}>
                {word}{" "}
              </span>
            ))}
          </h2>
          <div className="about-body">
            {profile.about.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.1}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="about-stats">
            <div>
              <span className="stat-value">
                {profile.cgpa}
                <span>/10</span>
              </span>
              <span className="stat-label">Current CGPA</span>
            </div>
            <div>
              <span className="stat-value">{profile.graduation}</span>
              <span className="stat-label">Expected graduation</span>
            </div>
            <div className="about-degree">
              <ArrowUpRight size={28} strokeWidth={1.3} aria-hidden="true" />
              <span>
                {profile.degree}
                <br />
                {profile.specialization}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
