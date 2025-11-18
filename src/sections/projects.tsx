import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Project } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-card border rounded-2xl transition-all duration-300 hover:border-foreground/30 hover:shadow-lg">
    <div className="p-7">
      <div className="flex items-center justify-center rounded-2xl bg-accent aspect-video w-full overflow-hidden">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="h-20 w-20 object-contain opacity-70"
        />
      </div>

      <h3 className="mt-5 text-2xl font-bold leading-snug tracking-tight">
        {project.title}
      </h3>

      <p className="mt-3 text-base text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="rounded-full font-normal">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <Button size="sm" className="rounded-full px-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        </Button>

        <Button variant="outline" size="sm" className="rounded-full px-4">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            View Code
          </a>
        </Button>
      </div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>

          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
            Featured Work
          </h2>

          <p className="text-muted-foreground mt-3 sm:mt-5 text-lg leading-relaxed max-w-xl mx-auto">
            A curated selection of my fullstack + AI projects.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
