import { Badge } from "@/components/ui/badge";
import {
  Braces,
  Cloud,
  Component,
  Container,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Send,
  Server,
  Terminal,
  Wind,
  Figma as FigmaIcon,
} from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <Braces className="size-5" /> },
      { name: "Next.js", icon: <Layers className="size-5" /> },
      { name: "TypeScript", icon: <Braces className="size-5" /> },
      { name: "Tailwind CSS", icon: <Wind className="size-5" /> },
      { name: "Shadcn UI", icon: <Component className="size-5" /> },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <Server className="size-5" /> },
      { name: "Express.js", icon: <Server className="size-5" /> },
      { name: "PostgreSQL", icon: <Database className="size-5" /> },
      { name: "MongoDB", icon: <Database className="size-5" /> },
      { name: "Prisma", icon: <Database className="size-5" /> },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", icon: <Container className="size-5" /> },
      { name: "AWS", icon: <Cloud className="size-5" /> },
      { name: "Git", icon: <GitBranch className="size-5" /> },
      { name: "CI/CD", icon: <Cpu className="size-5" /> },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "VS Code", icon: <Terminal className="size-5" /> },
      { name: "Figma", icon: <FigmaIcon className="size-5" /> },
      { name: "Postman", icon: <Send className="size-5" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 text-center">
          <Badge
            variant="secondary"
            className="mb-5 rounded-md bg-secondary text-secondary-foreground px-3 py-1 text-sm"
          >
            Skills & Technologies
          </Badge>

          <h2 className="text-5xl font-bold tracking-tight">
            My Technical Expertise
          </h2>

          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A look at the languages, frameworks, tools, and platforms I rely on
            to build modern, scalable, and beautiful applications.
          </p>
        </div>

        <div className="mt-10 space-y-14">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="mb-8 text-center text-3xl font-semibold md:text-left">
                {category.name}
              </h3>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="flex cursor-pointer items-center gap-3 rounded-full px-5 py-2.5 
                               text-base font-medium shadow-sm
                               transition-all duration-200 ease-in-out 
                               hover:scale-[1.06] hover:opacity-95"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
