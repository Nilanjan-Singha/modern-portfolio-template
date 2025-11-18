import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Wrench, Github, Rocket } from "lucide-react";
import { wipProjects } from "@/data/work-in-progress";
import { statusConfig } from "@/data/work-in-progress";


interface FutureProject {
  id: number;
  name: string;
  stack: string[];
}

const futureProjects: FutureProject[] = [
  {
    id: 1,
    name: "Decentralized Social Network",
    stack: ["Ethereum", "IPFS", "The Graph"],
  },
  {
    id: 2,
    name: "Real-time Data Viz Tool",
    stack: ["SvelteKit", "D3.js", "WebSockets"],
  },
  {
    id: 3,
    name: "Open Source Contributor",
    stack: ["shadcn/ui", "Next.js"],
  },
];

const WorkInProgressSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="rounded-md uppercase">
            Work in Progress
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4">
            Currently Building
          </h2>

          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A peek behind the curtain at my ongoing projects and experiments.
          </p>
        </div>

        {/* WIP Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {wipProjects.map((project) => (
            <Card key={project.id} className="flex flex-col border-dashed">
              <div className="bg-accent aspect-video w-full rounded-t-lg flex items-center justify-center">
                <Wrench className="w-16 h-16 text-muted-foreground/70" />
              </div>

              <CardContent className="p-6 grow flex flex-col">
                <h3 className="font-semibold text-lg mb-2">{project.name}</h3>

                <p className="text-muted-foreground text-sm mb-4 grow">
                  {project.description}
                </p>

                {/* Status + Progress */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          statusConfig[project.status].dotClass
                        }`}
                      />
                      <span className="font-medium">{project.status}</span>
                    </div>

                    <span>{project.progress}%</span>
                  </div>

                  <Progress value={project.progress} className="h-2" />
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {project.githubUrl && (
                <CardFooter className="p-6 pt-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full h-9 px-4 rounded-full text-sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </a>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        {/* Future Section */}
        <div className="mt-20">
          <h3 className="text-center text-3xl font-bold tracking-tight mb-8">
            What's Next?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {futureProjects.map((project) => (
              <Card key={project.id} className="p-4 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-accent p-2 rounded-full">
                    <Rocket className="w-4 h-4 text-muted-foreground" />
                  </div>

                  <h4 className="font-semibold text-sm grow">
                    {project.name}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs rounded-full font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkInProgressSection;
