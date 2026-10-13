// Factual portfolio content. Keep personal contact details limited to public links.
export const profile = {
  name: "Shatadru Adhikary",
  firstName: "Shatadru",
  email: "shatadruadhikary05@gmail.com",
  tagline: "Building intelligent experiences through code.",
  intro:
    "Computer Science undergraduate building at the intersection of full-stack development, generative AI, and intelligent software systems.",
  resume: "/resume.pdf",
  university: "VIT-AP University",
  degree: "B.Tech",
  specialization: "Computer Science & Engineering",
  graduation: "2027",
  cgpa: "9.08",
  about: [
    "I’m pursuing a B.Tech in Computer Science and Engineering at VIT-AP University, with an expected graduation in 2027 and a CGPA of 9.08. I’m drawn to the point where a thoughtful interface meets a capable system — turning ideas into software people can use.",
    "My academic projects explore generative AI chatbots, retrieval-augmented generation, and AI-driven website creation. Alongside full-stack development, I practice data structures, algorithms, and problem solving. Outside of code, I’m interested in financial markets and technical analysis.",
  ],
  interests: [
    "Financial markets",
    "Futures and options",
    "Forex",
    "Technical analysis",
    "Fibonacci retracement",
    "Support and resistance",
    "Trend analysis",
    "Price action",
  ],
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const projects = [
  {
    id: "medibot",
    number: "01",
    title: "MediBot",
    eyebrow: "RETRIEVAL-AUGMENTED GENERATION",
    headline: "A conversation with a knowledge layer.",
    description:
      "An AI-powered healthcare chat application that brings medical information into context. Built with OpenAI GPT and LangChain, backed by a retrieval pipeline spanning 5,859 indexed document chunks.",
    github: "https://github.com/Shatadru281/MediBot",
    stack: [
      "Python",
      "Flask",
      "LangChain",
      "OpenAI GPT",
      "Pinecone",
      "RAG",
      "Vector Embeddings",
    ],
    features: [
      "5,859 document chunks processed and indexed as vector embeddings",
      "Pinecone vector search for medical information retrieval",
      "Context-aware responses with OpenAI GPT and LangChain",
      "Flask backend and symptom-based informational insights",
    ],
    challenge:
      "Connect conversational AI with relevant medical documents so responses can draw on retrieved context.",
    approach:
      "Process and index document chunks in Pinecone, retrieve relevant information, and pass that context through a LangChain pipeline to OpenAI GPT. Serve the application through Flask.",
    outcome:
      "A healthcare information chatbot with a retrieval pipeline covering 5,859 indexed document chunks and a symptom-based conversational experience.",
    screenshot: null,
    screenshotAlt: "",
  },
  {
    id: "vision",
    number: "02",
    title: "Vision-GPT",
    eyebrow: "FULL-STACK AI APPLICATION",
    headline: "Thoughtful conversations. Connected end to end.",
    description:
      "A GPT-powered chat assistant built on the MERN stack. A responsive React interface, a real-time typing effect, authentication, and persistent conversations come together in one application.",
    github: "https://github.com/Shatadru281/vision-gpt",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "OpenAI API",
      "REST APIs",
    ],
    features: [
      "User authentication and persistent chat storage",
      "Responsive React interface with a real-time typing effect",
      "Node.js and Express backend connected to MongoDB",
      "Optimized API request handling and environment-based credentials",
    ],
    challenge:
      "Bring an AI conversation into a complete web application with account access, saved chats, and a responsive interface.",
    approach:
      "Connect a React frontend to a Node.js and Express API, persist conversations in MongoDB, and integrate the OpenAI API with credentials managed through environment variables.",
    outcome:
      "A full-stack chat application with authentication, conversation persistence, a typing effect, and a responsive user experience.",
    screenshot: null,
    screenshotAlt: "",
  },
  {
    id: "vibe",
    number: "03",
    title: "Vibe AI Website Builder",
    eyebrow: "GENERATIVE AI × WEB DEVELOPMENT",
    headline: "From a prompt to a new possibility.",
    description:
      "An AI-powered website generation platform built with Next.js 14 and TypeScript. GPT-4 produces layout descriptions that a generation pipeline turns into deployable React components.",
    github: "https://github.com/Shatadru281/Vibe-AI-Website-Builder",
    stack: ["Next.js 14", "TypeScript", "React", "OpenAI GPT-4 API", "Docker"],
    features: [
      "GPT-4 integration for AI-generated layout descriptions",
      "A pipeline that interprets layouts as React components",
      "Next.js 14 and TypeScript application architecture",
      "Docker containerization",
    ],
    challenge:
      "Turn AI-generated layout descriptions into structured, deployable frontend components.",
    approach:
      "Use the OpenAI GPT-4 API to produce layout descriptions, interpret them through a component generation pipeline, and package the Next.js and TypeScript application with Docker.",
    outcome:
      "An AI-powered website builder that converts generated layouts into deployable React components.",
    screenshot: null,
    screenshotAlt: "",
  },
];

export const skillGroups = [
  {
    title: "Programming languages",
    items: ["Java · Intermediate", "Python · Basic", "JavaScript"],
  },
  {
    title: "Core computer science",
    items: [
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Object-Oriented Programming",
      "DBMS",
      "Computer Networks",
    ],
  },
  {
    title: "Full-stack development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "MERN Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "EJS",
      "Flask",
      "REST APIs",
    ],
  },
  { title: "Databases", items: ["MySQL", "MongoDB"] },
  {
    title: "AI & machine learning",
    items: [
      "Python-based Machine Learning",
      "Data Preprocessing",
      "Model Training",
      "LangChain",
      "Retrieval-Augmented Generation",
    ],
  },
  { title: "Development tools", items: ["GitHub", "Docker", "Postman"] },
];

export const education = [
  {
    year: "2027 · Expected",
    title: "VIT-AP University",
    subtitle: "B.Tech, Computer Science & Engineering",
    result: "CGPA 9.08",
  },
  {
    year: "2023",
    title: "Atreyee D.A.V Public School",
    subtitle: "Class XII · CBSE",
    result: "86.8%",
  },
  {
    year: "2021",
    title: "Atreyee D.A.V Public School",
    subtitle: "Class X · CBSE",
    result: "91.4%",
  },
];

export const certifications = [
  {
    title:
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    url: "https://drive.google.com/file/d/1Hed3lvevn6ICQev-hqXi81pZ9fCJZ3eD/view?usp=sharing",
  },
  {
    title: "Machine Learning A-Z: AI-Python",
    issuer: "Course certificate",
    url: "https://drive.google.com/file/d/1NSJTiWQtdfgANAvM8asTGL1dVWpc303I/view?usp=sharing",
  },
];

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    handle: "@Shatadru281",
    description: "Explore the code behind the ideas.",
    url: "https://github.com/Shatadru281",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "Shatadru Adhikary",
    description: "Connect beyond the code.",
    url: "https://linkedin.com/in/shatadru-adhikary-713a66293",
  },
  {
    id: "leetcode",
    label: "LeetCode",
    handle: "@SHATARDRU_281",
    description: "A space for practicing problem solving.",
    url: "https://leetcode.com/u/SHATARDRU_281/",
  },
];
