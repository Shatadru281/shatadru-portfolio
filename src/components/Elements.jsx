import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = as === "article" ? motion.article : motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
export function ExternalLink({ children, href, className = "", ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
export function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span className="section-number">{number}</span>
      <span>{children}</span>
    </div>
  );
}
export function ArrowLink({ children, href, className = "" }) {
  return (
    <ExternalLink href={href} className={`arrow-link ${className}`}>
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </ExternalLink>
  );
}
