export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  imageUrl?: string; // Optional image reference if needed
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  coursework: string[];
  achievements: string[];
  futureGoals: string;
}

export const projects: Project[] = [
  {
    id: "os-777",
    title: "OS 777",
    tagline: "A custom unix-like operating system kernel built from scratch in Rust.",
    description: "A bare-metal, Unix-like kernel designed for resource-constrained systems, achieving sub-millisecond scheduling latency with zero runtime allocations in the hot path.",
    problem: "Standard operating system kernels are bloated, containing millions of lines of legacy code that introduce unpredictable scheduling jitter and memory overhead, making them unsuitable for critical real-time robotic systems.",
    solution: "Built a preemptive kernel from scratch in Rust. It utilizes cooperative multitasking, virtual memory paging, direct assembly routines for context switching, and a custom memory manager that avoids fragmentation in runtime-critical loops.",
    architecture: "Strict microkernel architecture with isolated system space and user space. Utilizes a custom virtual memory allocator mapping physical page frames, and communicates via lock-free ring-buffered Inter-Process Communication (IPC).",
    techStack: ["Rust", "x86_64 Assembly", "Linker Scripts", "QEMU", "Makefile"],
    features: [
      "Preemptive round-robin task scheduler",
      "Virtual memory manager with page table manipulation",
      "Custom FAT-like lightweight filesystem parser",
      "Lock-free IPC via ring buffers",
      "Direct hardware I/O driver abstraction for serial ports"
    ],
    githubUrl: "https://github.com/nova/os777"
  },
  {
    id: "draft",
    title: "Draft",
    tagline: "Collaborative, real-time rich-text editing engine with offline synchronization.",
    description: "A local-first, peer-to-peer collaborative text editor using Conflict-free Replicated Data Types (CRDTs) to support offline editing with seamless conflict resolution.",
    problem: "Centralized real-time editors introduce heavy server-side synchronization loads, lag on high-latency networks, and completely lose data access when offline.",
    solution: "Designed a local-first editor using Yjs and Slate.js. Operations are stored locally in IndexedDB and synchronized peer-to-peer using WebRTC channels, resolving editing conflicts mathematically without requiring a centralized coordinator.",
    architecture: "Decentralized P2P mesh network synchronized via WebRTC with an active signaling fallback. Changes are processed as CRDT operations on a SlateJS document tree, persisting snapshots to browser IndexedDB.",
    techStack: ["TypeScript", "React", "Slate.js", "Y.js", "WebRTC", "IndexedDB", "WebSockets"],
    features: [
      "Real-time peer-to-peer synchronization",
      "Offline-first reading and writing capabilities",
      "Atomic Conflict-free Replicated Data Type (CRDT) sync",
      "Active peer cursor tracking and live presence indicator",
      "Version history with rollback support"
    ],
    githubUrl: "https://github.com/nova/draft"
  },
  {
    id: "streak7",
    title: "Streak7",
    tagline: "Distributed, consensus-driven task scheduler built for high-scale microservices.",
    description: "A highly-available cron-like scheduling system engineered in Go, utilizing Raft consensus and Redis locks to coordinate thousands of executions per second.",
    problem: "Standard cron setups lack scaling limits, resulting in race conditions, duplicate job execution, or complete outage when a single scheduling node fails.",
    solution: "Developed Streak7 using Go and the Raft consensus algorithm. It ensures only one leader node processes task assignments at any time. Active tasks are queued in Redis Streams and distributed to workers with gRPC keep-alives.",
    architecture: "Consensus-based leader election cluster (Raft). Master nodes schedule executions, pushing job metadata to a distributed Redis Streams layer. Stateless worker pods consume tasks over gRPC streaming connections.",
    techStack: ["Go", "Redis Streams", "gRPC", "Docker", "Kubernetes", "Raft Protocol"],
    features: [
      "Fault-tolerant leader election via Raft",
      "Sub-millisecond task dispatching at high volumes",
      "Reliable lock acquisition with auto-refresh mechanism",
      "Dynamic worker pool auto-scaling",
      "Detailed gRPC telemetry and health metrics APIs"
    ],
    githubUrl: "https://github.com/nova/streak7"
  },
  {
    id: "tiles360",
    title: "Tiles360",
    tagline: "GPU-accelerated spatial mapping and geographic visualization engine.",
    description: "A high-performance interactive web mapping client using raw WebGL shaders and quadtree layouts to fluidly display huge multi-layered geospatial datasets.",
    problem: "Standard interactive mapping libraries experience severe performance degradation and frame drop when rendering complex vector layers or heavy raster overlays on mobile viewports.",
    solution: "Built a custom map canvas utilizing WebGL and custom GLSL vertex/fragment shaders. Implemented a quadtree dynamic tiling system to perform level-of-detail math on the fly, loading and rendering only visible geometry.",
    architecture: "Dynamic Quadtree tiling scheduler linked to a WebGL pipeline. Geospatial coordinates are projected to web-mercator spaces in parallel, transferring telemetry array buffers directly to the GPU context.",
    techStack: ["JavaScript", "WebGL", "GLSL Shaders", "HTML5 Canvas", "Quadtree Algorithms"],
    features: [
      "GPU-accelerated vector and raster rendering layers",
      "Dynamic Level-of-Detail (LOD) tiling hierarchy",
      "Custom GLSL shader filters for real-time heatmaps",
      "Sub-16ms frame rates under heavy dataset loads",
      "Smooth multi-touch pan and pinch-to-zoom gestures"
    ],
    githubUrl: "https://github.com/nova/tiles360"
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    tagline: "Premium cinematic showcase designed for high-impact product-style storytelling.",
    description: "A recruiter-grade developer portfolio combining Apple's minimalist typography and Netflix's card grid, built for perfect accessibility and speed.",
    problem: "Most developer portfolios are overloaded with chaotic neon animations, generic templates, or lack high-impact storytelling for core engineering projects.",
    solution: "Designed a premium dark luxury portfolio. Built with Next.js App Router and Framer Motion, it features smooth card expansion transitions, a mobile-first Netflix slider, and clean, high-contrast typography.",
    architecture: "Static Site Generation (SSG) with client-side dynamic layouts. Framer Motion is utilized for layout animation, ensuring hardware-accelerated transforms and zero layout shifts.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    features: [
      "Apple-inspired typographic product showcases",
      "Netflix-inspired horizontal scrolling content lane",
      "Fully responsive and touch-optimized gestures",
      "Perfect score targets on LightHouse audits",
      "No-framework raw Tailwind-configured dark layout"
    ],
    githubUrl: "https://github.com/nova/portfolio"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Rust", "Go", "Python", "C++", "HTML5 / CSS3", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "WebGL", "State Management", "SEO Optimization"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "gRPC", "REST APIs", "GraphQL", "WebSockets", "Raft Consensus"]
  },
  {
    title: "Cloud & Database",
    skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Redis", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools & Systems",
    skills: ["Git", "GitHub Actions", "Linux / Unix", "System Design", "Product Innovation", "CI/CD Pipelines"]
  }
];

export const education: EducationItem = {
  degree: "B.Tech Computer Science Engineering",
  institution: "Computer Science Engineering Student",
  period: "2023 - 2027 (Expected)",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems Design",
    "Database Management Systems",
    "Computer Networks",
    "Distributed Systems",
    "Software Engineering Methodologies"
  ],
  achievements: [
    "Top 5% of department academic cohort",
    "Lead Developer at University Open Source Community club",
    "First Place in regional System Design Hackathon (2025)",
    "Contributed minor patches to core Rust ecosystem libraries"
  ],
  futureGoals: "To specialize in system design and cloud infrastructure, building developer tools and highly-available software systems that address real-world latency and scale challenges."
};

export const contactInfo = {
  githubUrl: "https://github.com",
  linkedInUrl: "https://linkedin.com",
  emailAddress: "nova@example.com"
};
