import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { projects } from "../data/portfolio";
import { Reveal, SectionLabel, ExternalLink } from "../components/Elements";
import ProjectPreview from "../components/ProjectPreview";
import CaseStudy from "../components/CaseStudy";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  return (
    <section
      id="projects"
      className="projects section-pad"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <SectionLabel number="02">Selected work</SectionLabel>
        <Reveal>
          <h2 id="projects-title">
            Ideas, made <em>real.</em>
          </h2>
          <p>Three explorations in AI. Built to learn. Designed to work.</p>
        </Reveal>
        <span className="project-count">
          ACADEMIC PROJECTS
          <br />
          01 — 03
        </span>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <Reveal
            as="article"
            key={project.id}
            className={`project-row project-${project.id}`}
          >
            <div className="project-copy">
              <div className="project-kicker">
                <span>{project.number} /</span>
                <span>{project.eyebrow}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-headline">{project.headline}</p>
              <p className="project-description">{project.description}</p>
              {project.id === "medibot" && (
                <div className="project-metric">
                  <strong>5,859</strong>
                  <span>
                    document chunks
                    <br />
                    indexed for retrieval
                  </span>
                </div>
              )}
              <div className="tags">
                {project.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="project-actions">
                <button
                  className="arrow-link"
                  onClick={() => setSelected(project)}
                >
                  Inside the project <Plus size={17} aria-hidden="true" />
                </button>
                <ExternalLink
                  className="source-link"
                  href={project.github}
                  aria-label={`${project.title} on GitHub`}
                >
                  GitHub <ArrowUpRight size={16} aria-hidden="true" />
                </ExternalLink>
              </div>
            </div>
            <div className="project-art">
              {project.screenshot ? (
                <figure className="real-screenshot">
                  <img
                    src={project.screenshot}
                    alt={
                      project.screenshotAlt ||
                      `${project.title} application screenshot`
                    }
                    loading="lazy"
                    width="1200"
                    height="850"
                  />
                  <figcaption>Project screenshot · {project.title}</figcaption>
                </figure>
              ) : (
                <ProjectPreview id={project.id} />
              )}
            </div>
          </Reveal>
        ))}
      </div>
      <CaseStudy project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
