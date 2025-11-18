
type Status = "Planning" | "In Development" | "Testing";

export const statusConfig: Record<Status, { dotClass: string }> = {
  Planning: { dotClass: "bg-[#f1c40f]" },
  "In Development": { dotClass: "bg-[#3B82F6]" },
  Testing: { dotClass: "bg-[#2d8659]" },
};

export interface WIPProject {
  id: number;
  name: string;
  description: string;
  progress: number;
  status: Status;
  stack: string[];
  githubUrl?: string;
}

export const wipProjects: WIPProject[] = [
  {
    id: 1,
    name: "RailSync — IRL Train Delay Predictor",
    description:
      "An AI-powered prediction system that analyzes 10+ years of IRCTC delay data, weather, and congestion to forecast train delays in real time.",
    progress: 65,
    status: "In Development",
    stack: ["Python", "FastAPI", "XGBoost", "Next.js", "Supabase"],
    githubUrl: "#",
  },
  {
    id: 2,
    name: "AgniveerPrep — Defence Exam AI Coach",
    description:
      "An adaptive learning platform for NDA/AFSB/Agneepath aspirants with LLM-based doubt solving, mock interviews, and personalized study plans.",
    progress: 30,
    status: "Planning",
    stack: ["React Native", "LangChain", "OpenAI", "PostgreSQL"],
  },
  {
    id: 3,
    name: "Smart Line Queueing for Govt Offices",
    description:
      "A hyperlocal app that tracks real-time queue lengths at RTOs, passport centres, colleges, and hospitals using user-pings + vision-based counters.",
    progress: 80,
    status: "Testing",
    stack: ["Next.js", "TensorFlow Lite", "Edge AI", "Firebase"],
    githubUrl: "#",
  },
];