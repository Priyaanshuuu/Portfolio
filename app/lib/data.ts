// lib/data.ts
export const PROFILE = {
  name: "Priyanshu Sinha",
  role: "Full Stack Engineer & DSA Enthusiast",
  about: "Bridging the gap between complex algorithms and pixel-perfect user experiences. Specializing in Next.js, Generative AI, and robust backend systems.",
  contact: {
    email: "priyanshusinha636@gmail.com",
    linkedin: "https://linkedin.com/in/priyanshu-sinha-519147225", 
    github: "https://github.com/Priyaanshuuu",
    leetcode: "https://leetcode.com/Priyaanshu18/"
  }
};

export const DSA_STATS = {
  solved: "500+",
  platform: "LeetCode",
  badges: ["C++"],
  links: {
    leetcode_Profile: "https://leetcode.com/Priyaanshu18"
  },
  hackathon: "Smart India Hackathon Finalist"
};

export const SKILLS = {
  languages: ["C++", "Java", "JavaScript", "TypeScript", "Python"],
  frontend: ["React.js", "Next.js (App Router)", "Redux Toolkit", "Tailwind CSS", "Responsive Design"],
  backend: ["Node.js", "Express.js", "Django", "RESTful APIs", "JWT Auth", "NextAuth"],
  ai_llms: ["LangChain", "Vector Databases", "OpenAI API", "Google Gemini API", "RAG Pipelines"],
  databases: ["MongoDB", "VectorDB", "PostgreSQL"],
  tools: ["Git", "GitHub", "WebSocket", "Docker", "Postman", "VS Code", "Vercel"]
};

export const PROJECTS = [
  {
    id: "nexus",
    title: "Nexus",
    tagline: "AI-Augmented Collaborative Workspace",
    description: "Real-time document collaboration with role-based access and offline sync. Think Google Docs meets GitHub Copilot.",
    tags: ["Next.js", "Yjs", "Liveblocks", "Gemini API"],
    links: {
      demo: "https://nexus-1hn4.vercel.app/",
      repo: "https://github.com/Priyaanshuuu/nexus"
    },
    // Detailed Section Data
    architecture: "Built on a monolithic Next.js architecture using Yjs for Conflict-free Replicated Data Types (CRDTs). Utilizes a custom sync processor with smart queuing for offline support.",
    challenge: "Handling real-time conflict resolution when multiple users edited the same line while offline.",
    solution: "Implemented a custom sync queue that merges changes based on vector clocks once connectivity is restored."
  },
  {
    id: "knowt",
    title: "Knowt",
    tagline: "Multi-Modal AI Study Companion",
    description: "Transforms PDFs, videos, and audio into summaries and quizzes using Groq and OpenAI.",
    tags: ["Next.js", "Groq AI", "Prisma", "Vector DB"],
    links: {
      demo: "https://knowt-1.onrender.com/",
      repo: "https://github.com/Priyaanshuuu/Knowt"
    },
    architecture: "Event-driven architecture. Uploads trigger a processing pipeline involving AssemblyAI for transcription and Groq for summarization.",
    challenge: "Large video files were timing out serverless functions during transcription.",
    solution: "Offloaded processing to background workers and used webhooks to update the frontend status via polling."
  },
  {
    id: "reelspro",
    title: "Reels Pro",
    tagline: "High-Performance Video Platform",
    description: "Short-form video platform optimized for speed and engagement with MongoDB aggregations.",
    tags: ["React 19", "Next.js 15", "MongoDB", "Framer Motion"],
    links: {
      demo: "#",
      repo: "https://github.com/Priyaanshuuu/ReelsPro.git"
    },
    architecture: "Micro-service style API routes within Next.js. Aggregation pipelines in MongoDB for complex feed algorithms.",
    challenge: "Video load times were causing layout shifts (CLS) and poor UX.",
    solution: "Implemented optimistic UI updates and aggressive caching with Next.js Image/Video optimization."
  },
  {
    id: "anoysend",
    title: "AnoySend",
    tagline: "Anonymous Messaging Platform",
    description: "Send encrypted anonymous messages with expiring content. Built with Next.js and featuring real-time notifications and message encryption.",
    tags: ["Next.js", "Crypto-JS", "Prisma", "WebSocket"],
    links: {
      demo: "#",
      repo: "https://github.com/Priyaanshuuu/MysteryApp-NextJS"
    },
    architecture: "Full-stack Next.js application with end-to-end encryption for messages. Uses Prisma ORM for database management and WebSocket for real-time notifications.",
    challenge: "Ensuring message encryption and decryption on both client and server without exposing sensitive data in transit.",
    solution: "Implemented asymmetric encryption using crypto-js and ensured secure key exchange through HTTPS. Added message expiration policies at the database level."
  },
  {
    id: "megablog",
    title: "MegaBlog",
    tagline: "Modern Blog Application with RTK",
    description: "Feature-rich blog platform built with React and Redux Toolkit. Includes rich text editing, categories, comments, and advanced filtering.",
    tags: ["React", "Redux Toolkit", "Firebase", "Tailwind CSS"],
    links: {
      demo: "#",
      repo: "https://github.com/Priyaanshuuu/MegaBlog"
    },
    architecture: "Client-side state management using Redux Toolkit for scalable blog operations. Firebase for authentication and real-time data synchronization. Modular component structure for reusability.",
    challenge: "Managing complex state for multiple blog features like draft saves, real-time comments, and category filtering without causing performance bottlenecks.",
    solution: "Utilized RTK slices for feature-based state management and memoization techniques to prevent unnecessary re-renders. Implemented lazy loading for blog posts and comments."
  }
];