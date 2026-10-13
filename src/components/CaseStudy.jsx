import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { ExternalLink } from "./Elements";

export default function CaseStudy({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.body.style.overflow;
    if (project) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = previous;
      if (dialog.open) dialog.close();
    };
  }, [project]);
  return (
    <dialog
      ref={ref}
      className="case-dialog"
      aria-labelledby="case-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      {project && (
        <article className="case-body">
          <button
            onClick={onClose}
            className="case-close icon-button"
            aria-label="Close case study"
          >
            <X />
          </button>
          <span className="eyebrow">
            PROJECT {project.number} / ACADEMIC PROJECT
          </span>
          <h2 id="case-title">{project.title}</h2>
          <p className="case-intro">{project.description}</p>
          <div className="tags">
            {project.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <div className="case-copy">
            <section>
              <h3>The idea</h3>
              <p>{project.challenge}</p>
            </section>
            <section>
              <h3>How it comes together</h3>
              <p>{project.approach}</p>
            </section>
            <section>
              <h3>What I built</h3>
              <p>{project.outcome}</p>
              <ul>
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
          </div>
          <p className="case-note">
            The portfolio artwork is a conceptual presentation. Explore the
            repository for the project’s source and implementation.
          </p>
          <ExternalLink href={project.github} className="button button-dark">
            Explore the source <ArrowUpRight size={17} />
          </ExternalLink>
        </article>
      )}
    </dialog>
  );
}
