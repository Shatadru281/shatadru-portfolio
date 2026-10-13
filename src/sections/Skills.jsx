import { useState } from "react";
import {
  Code2,
  Braces,
  Layers3,
  Database,
  Sparkles,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { skillGroups, profile } from "../data/portfolio";
import { Reveal, SectionLabel } from "../components/Elements";
const icons = [Code2, Braces, Layers3, Database, Sparkles, Wrench];
export default function Skills() {
  const [active, setActive] = useState(0);
  function keyboard(event, i) {
    const direction = ["ArrowRight", "ArrowDown"].includes(event.key)
      ? 1
      : ["ArrowLeft", "ArrowUp"].includes(event.key)
        ? -1
        : 0;
    let next;
    if (direction)
      next = (i + direction + skillGroups.length) % skillGroups.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = skillGroups.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`skill-tab-${next}`).focus();
  }
  return (
    <section
      id="skills"
      className="skills section-pad"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <SectionLabel number="03">The toolkit</SectionLabel>
        <Reveal>
          <h2 id="skills-title">
            A foundation to
            <br />
            <em>build upon.</em>
          </h2>
          <p>From core computer science to the next AI experiment.</p>
        </Reveal>
      </div>
      <Reveal className="skills-layout">
        <div
          className="skill-tabs"
          role="tablist"
          aria-label="Skill categories"
        >
          {skillGroups.map((group, i) => {
            const Icon = icons[i] || Code2;
            return (
              <button
                key={group.title}
                id={`skill-tab-${i}`}
                role="tab"
                aria-selected={active === i}
                aria-controls={`skill-panel-${i}`}
                tabIndex={active === i ? 0 : -1}
                className={active === i ? "selected" : ""}
                onClick={() => setActive(i)}
                onKeyDown={(e) => keyboard(e, i)}
              >
                <Icon size={19} strokeWidth={1.4} aria-hidden="true" />
                <span>{group.title}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            );
          })}
        </div>
        {skillGroups.map((group, i) => (
          <div
            key={group.title}
            role="tabpanel"
            id={`skill-panel-${i}`}
            aria-labelledby={`skill-tab-${i}`}
            hidden={active !== i}
            tabIndex={0}
            className="skill-panel"
          >
            <span className="eyebrow">
              0{i + 1} / {group.title}
            </span>
            <div className="skill-items">
              {group.items.map((item, index) => (
                <div key={item} style={{ "--item-index": index }}>
                  <span className="skill-dot" />
                  {item}
                </div>
              ))}
            </div>
            <span className="skill-panel-note">
              Always learning. Always building.
            </span>
          </div>
        ))}
      </Reveal>
      <Reveal className="interests-row">
        <span className="eyebrow">Away from the editor</span>
        <p>
          I follow financial markets and explore technical analysis, from price
          action and trends to support, resistance, and Fibonacci retracement.
        </p>
        <details>
          <summary>
            Personal interests <PlusIcon />
          </summary>
          <div>{profile.interests.join(" · ")}</div>
        </details>
      </Reveal>
    </section>
  );
}
function PlusIcon() {
  return <span aria-hidden="true">+</span>;
}
