import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  FileText,
  Leaf,
  MessageCircle,
  MoreHorizontal,
  Plus,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  SquarePen,
  WandSparkles,
} from "lucide-react";
import "../styles/previews.css";

function WindowBar({ title, dark = false }) {
  return (
    <div
      className={`preview-windowbar ${dark ? "preview-windowbar--dark" : ""}`}
    >
      <div className="preview-window-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <span>{title}</span>
      <MoreHorizontal aria-hidden="true" />
    </div>
  );
}

function ConceptLabel({ children }) {
  return (
    <div className="preview-concept">
      <span className="preview-concept-dot" />
      Concept preview <span aria-hidden="true">·</span> {children}
    </div>
  );
}

const retrievalSteps = [
  {
    name: "Query",
    icon: MessageCircle,
    title: "Start with a good question.",
    detail: "The question becomes the starting point for a grounded answer.",
    action: "Find relevant context",
  },
  {
    name: "Retrieve",
    icon: Search,
    title: "Find the closest context.",
    detail:
      "Semantic search looks for relevant passages in the indexed collection.",
    action: "Assemble context",
  },
  {
    name: "Context",
    icon: BookOpen,
    title: "Give the model its sources.",
    detail: "Retrieved passages are gathered into a focused context window.",
    action: "See the response",
  },
  {
    name: "Respond",
    icon: Sparkles,
    title: "Knowledge, in context.",
    detail:
      "A retrieval pipeline connects a question to source material before generating a response.",
    action: "Explore the pipeline",
  },
];

function MediBotPreview() {
  const [step, setStep] = useState(3);
  const reducedMotion = useReducedMotion();
  const current = retrievalSteps[step];
  return (
    <div
      className="preview-stage preview-stage--medibot"
      aria-label="MediBot retrieval concept"
    >
      <div className="preview-med-orbit" aria-hidden="true" />
      <div className="preview-med-window">
        <WindowBar title="medibot / knowledge workspace" />
        <div className="preview-med-body">
          <div className="preview-med-rail" aria-hidden="true">
            <div className="preview-med-brand">
              <Leaf />
            </div>
            <span className="preview-rail-active">
              <MessageCircle />
            </span>
            <BookOpen />
            <Database />
            <span className="preview-med-avatar">S</span>
          </div>
          <div className="preview-med-main">
            <div className="preview-med-topline">
              <span>
                MediBot <span className="preview-tag">RAG</span>
              </span>
              <span className="preview-connected">
                <i /> Knowledge connected
              </span>
            </div>
            <div className="preview-med-intro">
              <span className="preview-eyebrow">
                A LITTLE MORE UNDERSTANDING
              </span>
              <h3>{current.title}</h3>
            </div>
            <div className="preview-med-question">
              <span>How does MediBot find relevant context?</span>
              <span className="preview-question-avatar">S</span>
            </div>
            <div className="preview-med-answer">
              <div className="preview-med-spark">
                <Sparkles />
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={step}
                  className="preview-med-answer-content"
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.16 }}
                >
                  <strong>
                    {step === 3
                      ? "An answer is only as useful as its context."
                      : current.name + " is part of the process."}
                  </strong>
                  <p>{current.detail}</p>
                  <span className="preview-source">
                    <FileText /> Source-grounded architecture <ArrowUpRight />
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="preview-pipeline" aria-label="Retrieval pipeline">
              {retrievalSteps.map(({ name, icon: Icon }, index) => (
                <button
                  key={name}
                  type="button"
                  className={`preview-pipeline-step ${index === step ? "is-active" : ""} ${index < step ? "is-complete" : ""}`}
                  onClick={() => setStep(index)}
                  aria-pressed={index === step}
                >
                  <Icon />
                  <span>{name}</span>
                  {index < 3 && (
                    <ChevronRight
                      className="preview-pipeline-chevron"
                      aria-hidden="true"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="preview-med-bottom">
          <span>
            <Database />
            <strong>5,859</strong> indexed document chunks
          </span>
          <button type="button" onClick={() => setStep((step + 1) % 4)}>
            {current.action}
            <ArrowRight />
          </button>
        </div>
      </div>
      <p className="preview-sr-only" aria-live="polite">
        Pipeline step {step + 1} of 4: {current.name}. {current.detail}
      </p>
      <ConceptLabel>Explore the retrieval architecture</ConceptLabel>
    </div>
  );
}

const visionExamples = [
  {
    label: "System design",
    question: "What makes a thoughtful chat experience?",
    title: "A useful conversation starts with clarity.",
    body: "Give every message a clear place. Keep the context close. Make the next step feel obvious.",
    points: [
      "A focused conversation canvas",
      "History that is easy to revisit",
      "A clear, comfortable visual rhythm",
    ],
  },
  {
    label: "React state",
    question: "Explain React state in one small idea.",
    title: "State is the memory of an interface.",
    body: "A component remembers a value. When that value changes, React renders the interface again to reflect it.",
    points: [
      "Store what can change",
      "Update it through a setter",
      "Let the interface follow the data",
    ],
  },
];

function VisionPreview() {
  const [exampleIndex, setExampleIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(Infinity);
  const [playing, setPlaying] = useState(false);
  const typingTimer = useRef(null);
  const reducedMotion = useReducedMotion();
  const example = visionExamples[exampleIndex];
  useEffect(() => () => clearInterval(typingTimer.current), []);
  useEffect(() => {
    if (reducedMotion) {
      clearInterval(typingTimer.current);
      setVisibleChars(Infinity);
      setPlaying(false);
    }
  }, [reducedMotion]);
  function play(index) {
    clearInterval(typingTimer.current);
    setExampleIndex(index);
    if (reducedMotion) {
      setVisibleChars(Infinity);
      setPlaying(false);
      return;
    }
    setVisibleChars(0);
    setPlaying(true);
    let count = 0;
    const length = visionExamples[index].body.length;
    typingTimer.current = setInterval(() => {
      count += 4;
      setVisibleChars(count);
      if (count >= length) {
        clearInterval(typingTimer.current);
        setPlaying(false);
      }
    }, 24);
  }
  return (
    <div
      className="preview-stage preview-stage--vision"
      aria-label="Vision local conversation concept"
    >
      <div className="preview-vision-glow" aria-hidden="true" />
      <div className="preview-vision-window">
        <WindowBar title="vision / a space to think" dark />
        <div className="preview-vision-body">
          <aside className="preview-vision-sidebar">
            <div className="preview-vision-logo">
              <span aria-hidden="true">v.</span>
              <b>VISION</b>
            </div>
            <div className="preview-vision-new">
              <SquarePen />
              <span>Your workspace</span>
            </div>
            <span className="preview-vision-side-label">CONVERSATIONS</span>
            <div className="preview-vision-history">
              <MessageCircle />
              <span>A little clarity</span>
            </div>
            <div className="preview-vision-history preview-vision-history--muted">
              <MessageCircle />
              <span>The next idea</span>
            </div>
            <div className="preview-vision-sidebar-bottom">
              <ShieldCheck />
              <span>
                Auth & history
                <br />
                <b>Architecture concepts</b>
              </span>
            </div>
          </aside>
          <div className="preview-vision-chat">
            <div className="preview-vision-chat-top">
              <span>A little clarity</span>
              <span>
                <i /> LOCAL DEMO
              </span>
            </div>
            <div className="preview-vision-user">
              <span>{example.question}</span>
              <div>S</div>
            </div>
            <div className="preview-vision-response">
              <span className="preview-vision-response-icon">
                <Sparkles />
              </span>
              <div>
                <span className="preview-vision-assistant-label">VISION</span>
                <h3>{example.title}</h3>
                <p className="preview-vision-typed">
                  {example.body.slice(0, visibleChars)}
                  {playing && (
                    <span className="preview-typing-caret" aria-hidden="true" />
                  )}
                </p>
                <div
                  className={`preview-vision-points ${playing ? "is-typing" : ""}`}
                >
                  {example.points.map((point) => (
                    <div key={point}>
                      <Check />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="preview-vision-controls">
              <span>TRY A CONVERSATION</span>
              <div>
                {visionExamples.map((item, index) => (
                  <button
                    type="button"
                    key={item.label}
                    onClick={() => play(index)}
                    aria-pressed={index === exampleIndex}
                  >
                    {item.label}
                    <ArrowUpRight />
                  </button>
                ))}
                <button
                  type="button"
                  className="preview-vision-replay"
                  onClick={() => play(exampleIndex)}
                  aria-label="Replay the local sample conversation"
                  title="Replay sample"
                >
                  <RotateCcw />
                </button>
              </div>
            </div>
            <div className="preview-vision-composer" aria-hidden="true">
              <Plus />
              <span>A place for your next thought…</span>
              <span>
                <ArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="preview-sr-only" aria-live="polite">
        {playing
          ? "Playing a local conversation sample."
          : `${example.label} sample complete.`}
      </p>
      <ConceptLabel>Local chat · Auth & history architecture</ConceptLabel>
    </div>
  );
}

const buildStages = [
  "Reading the brief",
  "Setting the structure",
  "Finding the visual rhythm",
  "Adding the finishing touches",
  "Your idea, taking shape",
];

function VibePreview() {
  const [stage, setStage] = useState(4);
  const [building, setBuilding] = useState(false);
  const [buildCount, setBuildCount] = useState(0);
  const timers = useRef([]);
  const reducedMotion = useReducedMotion();
  const cancelTimers = () => timers.current.forEach(clearTimeout);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    if (reducedMotion) {
      cancelTimers();
      setStage(4);
      setBuilding(false);
    }
  }, [reducedMotion]);
  function build() {
    cancelTimers();
    setBuildCount((count) => count + 1);
    if (reducedMotion) {
      setStage(4);
      setBuilding(false);
      return;
    }
    setStage(0);
    setBuilding(true);
    timers.current = [1, 2, 3, 4].map((next, index) =>
      setTimeout(
        () => {
          setStage(next);
          if (next === 4) setBuilding(false);
        },
        340 + index * 420,
      ),
    );
  }
  function restore() {
    cancelTimers();
    setStage(4);
    setBuilding(false);
  }
  const reveal = (at) => ({
    opacity: stage >= at ? 1 : 0,
    y: stage >= at || reducedMotion ? 0 : 13,
    scale: stage >= at || reducedMotion ? 1 : 0.97,
  });
  return (
    <div
      className="preview-stage preview-stage--vibe"
      aria-label="Vibe local website composition concept"
    >
      <div className="preview-vibe-grid" aria-hidden="true" />
      <div className="preview-vibe-window">
        <WindowBar title="vibe / idea to interface" />
        <div className="preview-vibe-body">
          <aside className="preview-vibe-editor">
            <div className="preview-vibe-brand">
              <WandSparkles />
              <span>vibe</span>
              <span className="preview-vibe-beta">LAB</span>
            </div>
            <div className="preview-vibe-brief-label">
              <CircleDot /> THE BRIEF
            </div>
            <div className="preview-vibe-prompt">
              A beautiful little escape.
              <br />
              <span>Build a warm, editorial website for a nature retreat.</span>
            </div>
            <div className="preview-vibe-design-label">CREATIVE DIRECTION</div>
            <div
              className="preview-vibe-palette"
              aria-label="Cream, mint, coral, and forest color palette"
            >
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="preview-vibe-style">
              Thoughtful type.
              <br />
              Room to breathe.
              <br />A little unexpected.
            </div>
            <div className="preview-vibe-build-status">
              <span
                className={
                  building
                    ? "preview-vibe-status-dot is-building"
                    : "preview-vibe-status-dot"
                }
              />
              <span>{buildStages[stage]}</span>
            </div>
            <div className="preview-vibe-build-controls">
              <button type="button" onClick={build} disabled={building}>
                <Sparkles />
                {building
                  ? "Creating…"
                  : buildCount
                    ? "Build again"
                    : "Build concept"}
              </button>
              <button
                type="button"
                onClick={restore}
                title="Restore the finished concept"
                aria-label="Restore the finished concept"
              >
                <RotateCcw />
              </button>
            </div>
          </aside>
          <div className="preview-vibe-canvas">
            <div className="preview-vibe-canvas-toolbar">
              <span>
                <Code2 /> Preview
              </span>
              <span className="preview-vibe-canvas-sizes">
                <i />
                <i />
                <i />
              </span>
              <ArrowUpRight />
            </div>
            <motion.div
              className="preview-vibe-site"
              animate={{ opacity: stage >= 1 ? 1 : 0.3 }}
              transition={{ duration: reducedMotion ? 0 : 0.25 }}
            >
              <motion.div
                className="preview-sola-nav"
                animate={reveal(1)}
                transition={{ duration: reducedMotion ? 0 : 0.35 }}
              >
                <span className="preview-sola-logo">
                  sola<span>®</span>
                </span>
                <div>
                  <span>The place</span>
                  <span>The feeling</span>
                  <span className="preview-sola-nav-button">
                    Find your stay <ArrowUpRight />
                  </span>
                </div>
              </motion.div>
              <div className="preview-sola-hero">
                <motion.div
                  className="preview-sola-hero-copy"
                  animate={reveal(2)}
                  transition={{ duration: reducedMotion ? 0 : 0.45 }}
                >
                  <span>A SMALL ESCAPE. A BIG EXHALE.</span>
                  <h3>
                    A little less
                    <br />
                    <em>ordinary.</em>
                  </h3>
                  <p>
                    Somewhere between a deep breath
                    <br />
                    and your next favorite memory.
                  </p>
                  <div className="preview-sola-cta">
                    Come on in <ArrowUpRight />
                  </div>
                </motion.div>
                <motion.div
                  className="preview-sola-landscape"
                  animate={reveal(3)}
                  transition={{ duration: reducedMotion ? 0 : 0.5 }}
                  aria-label="Abstract illustration of a sunlit landscape"
                >
                  <div className="preview-sola-sun" />
                  <div className="preview-sola-hill preview-sola-hill--back" />
                  <div className="preview-sola-hill preview-sola-hill--front" />
                  <div className="preview-sola-water" />
                  <div className="preview-sola-cabin">
                    <i />
                    <b />
                    <span />
                  </div>
                  <div className="preview-sola-caption">
                    LESS SCROLLING.
                    <br />
                    MORE STAYING.
                  </div>
                  <span className="preview-sola-circle">
                    <ArrowDown />
                  </span>
                </motion.div>
              </div>
              <motion.div
                className="preview-sola-bottom"
                animate={reveal(4)}
                transition={{ duration: reducedMotion ? 0 : 0.35 }}
              >
                <div>
                  <span className="preview-sola-asterisk">✳</span>
                  <p>
                    A change of scenery.
                    <br />
                    <strong>A change of pace.</strong>
                  </p>
                </div>
                <span>
                  MADE FOR THE
                  <br />
                  ART OF DOING LESS.
                </span>
                <ArrowUpRight />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <p className="preview-sr-only" aria-live="polite">
        {building
          ? `Building a local concept: ${buildStages[stage]}.`
          : "Website composition complete. This is a local concept demonstration."}
      </p>
      <ConceptLabel>Watch an idea become an interface</ConceptLabel>
    </div>
  );
}

export default function ProjectPreview({ id }) {
  if (id === "medibot") return <MediBotPreview />;
  if (id === "vision") return <VisionPreview />;
  if (id === "vibe") return <VibePreview />;
  return null;
}
