import { useState } from "react";
import {
  ArrowUpRight,
  ArrowUp,
  Github,
  Linkedin,
  Code2,
  Copy,
  Check,
  Download,
} from "lucide-react";
import { profile, socialLinks } from "../data/portfolio";
import { Reveal, SectionLabel, ExternalLink } from "../components/Elements";
const socialIcons = { github: Github, linkedin: Linkedin, leetcode: Code2 };
export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Select the email address to copy it.");
    }
  }
  return (
    <>
      <section
        className="profiles section-pad"
        aria-labelledby="profiles-title"
      >
        <div className="profiles-heading">
          <span className="eyebrow">Elsewhere on the internet</span>
          <h2 id="profiles-title">
            Follow the <em>process.</em>
          </h2>
        </div>
        <div className="profile-links">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.id];
            return (
              <ExternalLink
                key={link.id}
                href={link.url}
                className="profile-link"
              >
                <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3>{link.label}</h3>
                  <p>{link.description}</p>
                </div>
                <ArrowUpRight
                  className="profile-arrow"
                  size={23}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </ExternalLink>
            );
          })}
        </div>
      </section>
      <section
        id="contact"
        className="contact section-pad"
        aria-labelledby="contact-title"
      >
        <SectionLabel number="06">Start a conversation</SectionLabel>
        <Reveal>
          <h2 id="contact-title">
            Have an idea
            <br />
            <em>worth building?</em>
            <a
              href={`mailto:${profile.email}`}
              className="contact-round"
              aria-label="Email Shatadru"
            >
              <ArrowUpRight size={52} strokeWidth={1.2} />
            </a>
          </h2>
        </Reveal>
        <div className="contact-bottom">
          <div>
            <p>Let’s talk about software, AI, and what comes next.</p>
            <div className="contact-email-row">
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <button
                className="copy-email icon-button"
                aria-label="Copy email address"
                onClick={copyEmail}
              >
                {copyStatus === "Email copied" ? (
                  <Check size={17} />
                ) : (
                  <Copy size={17} />
                )}
              </button>
            </div>
            <span className="copy-status" role="status">
              {copyStatus}
            </span>
          </div>
          <a
            className="resume-link"
            href={profile.resume}
            download="Shatadru-Adhikary-Resume.pdf"
          >
            Take my résumé with you <Download size={17} aria-hidden="true" />
          </a>
        </div>
        <footer>
          <a className="footer-brand" href="#home">
            Shatadru Adhikary<span> © {new Date().getFullYear()}</span>
          </a>
          <span>Made with curiosity & code.</span>
          <div className="footer-socials">
            {socialLinks
              .filter((x) => x.id !== "leetcode")
              .map((link) => (
                <ExternalLink key={link.id} href={link.url}>
                  {link.label}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </ExternalLink>
              ))}
            <a href="#home" aria-label="Back to top" className="back-top">
              <ArrowUp size={18} />
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}
