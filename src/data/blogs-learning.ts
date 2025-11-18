
type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  categories: string[];
  href: string;
};

type LearningItem = {
  name: string;
  progress: number;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Cracking System Design for College Projects",
    date: "August 2, 2024",
    excerpt:
      "A beginner-friendly breakdown of system design concepts that actually matter for student projects—from load balancing to caching and API patterns.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/803e2195-fc2b-494c-a9a0-36c9a2f0a2e6-shadcn-portfolio-template-vercel-app/assets/svgs/placeholder-1.svg",
    categories: ["System Design", "Guide"],
    href: "#",
  },
  {
    title: "How I Built My First SaaS as a College Student",
    date: "July 20, 2024",
    excerpt:
      "A behind-the-scenes look at building a fully functional SaaS project using the tools and resources available to students—no fancy cloud credits needed.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/803e2195-fc2b-494c-a9a0-36c9a2f0a2e6-shadcn-portfolio-template-vercel-app/assets/svgs/placeholder-1.svg",
    categories: ["Case Study", "Project"],
    href: "#",
  },
  {
    title: "Mastering GitHub: From Beginner to Open Source Contributor",
    date: "July 11, 2024",
    excerpt:
      "A practical roadmap to understanding Git, GitHub workflows, and contributing to open source—even if you're just starting out.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/803e2195-fc2b-494c-a9a0-36c9a2f0a2e6-shadcn-portfolio-template-vercel-app/assets/svgs/placeholder-1.svg",
    categories: ["Open Source", "Beginner"],
    href: "#",
  },
  {
    title: "Optimizing React Apps for Performance (Without Overthinking)",
    date: "June 28, 2024",
    excerpt:
      "A clean and simple guide to improving React performance using actual techniques that impact real projects—not just micro-optimizations.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/803e2195-fc2b-494c-a9a0-36c9a2f0a2e6-shadcn-portfolio-template-vercel-app/assets/svgs/placeholder-1.svg",
    categories: ["React", "Performance"],
    href: "#",
  },
];


export const learningItems: LearningItem[] = [
  { 
    name: "System Design for FAANG & Indian Product Companies (Swiggy, Razorpay, Zomato)", 
    progress: 80 
  },
  { 
    name: "Low-Level DSA & Competitive Programming for ICPC / CodeChef Ladders", 
    progress: 65 
  },
  { 
    name: "LLM Fine-Tuning & RAG for Indian Languages (Hindi, Marathi, Tamil)", 
    progress: 45 
  },
];
