import { Award, BadgeCheck,  Star, Trophy } from "lucide-react";

type Achievement = {
  icon: React.ElementType;
  title: string;
  date: string;
  description: string;
  badges: string[];
};

export const achievementsList: Achievement[] = [
  {
    icon: Trophy,
    title: "Smart India Hackathon Winner",
    date: "August 2024",
    description:
      "Built an AI-powered citizen grievance redressal system for a government ministry during SIH 2024.",
    badges: ["AI", "Hackathon", "National Level"],
  },
  {
    icon: Star,
    title: "Google Summer of Code Contributor",
    date: "May 2023 – August 2023",
    description:
      "Selected for GSoC and contributed to an open-source cloud tooling project under the CNCF organization.",
    badges: ["Open Source", "GSoC", "CNCF"],
  },
  {
    icon: Award,
    title: "LeetCode Top 5% Global",
    date: "2023 – Ongoing",
    description:
      "Achieved a global top 5% rating on LeetCode with 600+ problems solved and multiple contest top finishes.",
    badges: ["LeetCode", "DSA", "Competitive Coding"],
  },
  {
    icon: BadgeCheck,
    title: "CodeChef 4★ Rated",
    date: "2022 – Ongoing",
    description:
      "Reached 4-star rating on CodeChef with consistent participation in Long Challenges and Cook-Offs.",
    badges: ["CodeChef", "Rating", "Competitive Programming"],
  },
];