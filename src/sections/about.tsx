import { Github, Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6 flex justify-center">
      <div className="w-full max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row-reverse gap-16">

          {/* Desktop Image */}
          <div className="mt-10 w-56 h-56 md:w-72 md:h-72 hidden md:block shrink-0">
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-accent">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/803e2195-fc2b-494c-a9a0-36c9a2f0a2e6-shadcn-portfolio-template-vercel-app/assets/svgs/placeholder-1.svg"
                alt="Profile"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 md:text-left">

            <span className="inline-flex items-center justify-center rounded-md border border-transparent bg-secondary text-secondary-foreground px-3 py-1 text-sm font-semibold mb-5">
              About Me
            </span>

            {/* Mobile Image */}
            <div className="w-52 h-52 mt-3 mb-10 block md:hidden">
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-accent">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/803e2195-fc2b-494c-a9a0-36c9a2f0a2e6-shadcn-portfolio-template-vercel-app/assets/svgs/placeholder-1.svg"
                  alt="Profile"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>

            <h2 className="text-5xl font-bold mb-6 leading-tight tracking-tight">
              Passionate about creating impactful web experiences
            </h2>

                        <p className="text-lg leading-relaxed text-muted-foreground mb-8 text-justify">
                I’m a second-year Computer Science student passionate about building clean,
                user-focused and scalable web applications. Over the past few years, I’ve
                worked on multiple academic and personal projects involving full-stack
                development, cloud basics, and modern frontend frameworks like React and
                Next.js.
                <br /><br />
                I enjoy turning ideas into real products, exploring system design concepts,
                and continuously improving my problem-solving skills through competitive
                programming and open-source contributions. I’m currently looking for
                opportunities where I can apply my skills, learn from experienced teams, and
                contribute to impactful projects.
                </p>

            <div className="flex flex-wrap gap-4 justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-10 px-5 rounded-full bg-primary text-primary-foreground shadow hover:bg-primary/90"
              >
                <Github className="size-4" />
                View Github
              </a>

              <a
                href="#"
                download
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-10 px-5 rounded-full border border-input bg-background shadow hover:bg-accent hover:text-accent-foreground"
              >
                <Download className="size-4" />
                Download CV
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
