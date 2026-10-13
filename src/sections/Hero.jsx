import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import Orb from "../components/Orb";
import { ExternalLink } from "../components/Elements";
import { profile, socialLinks } from "../data/portfolio";

export default function Hero() {
  const reduce = useReducedMotion();
  const firstSpace = profile.name.indexOf(" ");
  const firstName =
    firstSpace === -1 ? profile.name : profile.name.slice(0, firstSpace);
  const remainingName =
    firstSpace === -1 ? "" : profile.name.slice(firstSpace + 1);
  const entrance = (delay) => ({
    initial: reduce ? false : { y: 35, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  });
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-topline">
        <motion.p {...entrance(0.05)} className="eyebrow">
          <span className="status-dot" />A mind for systems. An eye for
          possibility.
        </motion.p>
        <span className="hero-edition">PORTFOLIO — 2026</span>
      </div>
      <div className="hero-main">
        <div className="hero-content">
          <h1 id="hero-title">
            <motion.span {...entrance(0.15)}>
              {firstName.toUpperCase()}
            </motion.span>
            <motion.span {...entrance(0.25)}>
              {remainingName.toUpperCase()}
              <span className="name-period">.</span>
            </motion.span>
          </h1>
          <motion.div {...entrance(0.4)}>
            <p className="hero-tagline">
              {profile.tagline.split(/(intelligent)/i).map((part, index) =>
                part.toLowerCase() === "intelligent" ? (
                  <Fragment key={index}>
                    <em>{part}</em>
                    <br />
                  </Fragment>
                ) : (
                  part
                ),
              )}
            </p>
            <p className="hero-description">{profile.intro}</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-dark">
                Explore my work <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a
                href={profile.resume}
                download={`${profile.name.replace(/\s+/g, "-")}-Resume.pdf`}
                className="resume-link"
              >
                Download résumé <Download size={15} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div {...entrance(0.3)} className="hero-art">
          <Orb />
          <div className="art-index">
            <span>FIG. 01</span>
            <span>FROM COMPLEXITY, CLARITY.</span>
          </div>
        </motion.div>
      </div>
      <motion.div {...entrance(0.55)} className="hero-bottom">
        <div className="hero-disciplines">
          <span>Full-stack development</span>
          <span>Generative AI</span>
          <span>Creative problem solving</span>
        </div>
        <div className="hero-social">
          <ExternalLink
            href={socialLinks.find((x) => x.id === "github").url}
            aria-label="GitHub"
          >
            <Github size={18} />
          </ExternalLink>
          <ExternalLink
            href={socialLinks.find((x) => x.id === "linkedin").url}
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </ExternalLink>
          <a href="#about" className="scroll-link">
            Scroll to discover <ArrowDown size={14} aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
