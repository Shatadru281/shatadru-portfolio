import { ArrowUpRight, Award } from "lucide-react";
import { education, certifications } from "../data/portfolio";
import { Reveal, SectionLabel, ExternalLink } from "../components/Elements";

export default function Background() {
  return (
    <>
      <section
        id="education"
        className="education section-pad"
        aria-labelledby="education-title"
      >
        <div className="section-grid">
          <div>
            <SectionLabel number="04">The foundation</SectionLabel>
            <Reveal>
              <h2 id="education-title">
                Learning.
                <br />
                <em>In progress.</em>
              </h2>
            </Reveal>
          </div>
          <div className="education-list">
            <div className="timeline-track" aria-hidden="true" />
            {education.map((item, i) => (
              <Reveal
                key={item.year}
                className="education-item"
                delay={i * 0.05}
              >
                <span className="timeline-dot" />
                <span className="eyebrow">{item.year}</span>
                <div className="education-detail">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  <span className="education-result">{item.result}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        id="certifications"
        className="certifications section-pad"
        aria-labelledby="cert-title"
      >
        <div className="section-heading">
          <SectionLabel number="05">Continued exploration</SectionLabel>
          <Reveal>
            <h2 id="cert-title">
              More to <em>discover.</em>
            </h2>
            <p>Formal learning, beyond the classroom.</p>
          </Reveal>
        </div>
        <div className="cert-list">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} className="cert-card">
              <div className="cert-icon">
                <Award size={28} strokeWidth={1.2} aria-hidden="true" />
              </div>
              <div className="cert-text">
                <span className="eyebrow">{cert.issuer}</span>
                <h3>{cert.title}</h3>
              </div>
              <ExternalLink
                href={cert.url}
                className="arrow-link"
                aria-label={`View certificate: ${cert.title}`}
              >
                View certificate <ArrowUpRight size={18} aria-hidden="true" />
              </ExternalLink>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
