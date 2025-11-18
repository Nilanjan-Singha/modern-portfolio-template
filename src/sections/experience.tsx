import { Building2, Calendar } from "lucide-react";
import { experienceData } from "@/data/experience";


const ExperienceSection = () => {
  const badgeClasses =
    "inline-flex items-center justify-center border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 bg-secondary text-secondary-foreground rounded-full";

  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <span className={`${badgeClasses} mb-4 rounded-md px-3 py-1 text-sm`}>
            Experience
          </span>

          <h2 className="text-5xl font-extrabold tracking-tight">
            Professional Journey
          </h2>

          <p className="text-muted-foreground mt-4 text-xl max-w-2xl mx-auto leading-relaxed">
            A timeline of my professional growth, roles, and impactful contributions.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-border pl-10 space-y-16">

          {experienceData.map((exp, index) => (
            <div key={index} className="relative">

              {/* Timeline Dot */}
              <div className="absolute -left-[10px] top-1">
                <div className="h-5 w-5 rounded-full bg-primary border-4 border-background shadow-md"></div>
              </div>

              {/* Card Content */}
              <div className="space-y-4">

                {/* Company */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0 size-12 bg-accent/70 rounded-xl backdrop-blur-sm flex items-center justify-center border border-border">
                    <Building2 className="size-6 text-muted-foreground" />
                  </div>
                  <span className="text-2xl font-semibold">{exp.company}</span>
                </div>

                {/* Title + Period */}
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-base text-muted-foreground">
                    <Calendar className="size-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {exp.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={badgeClasses}>
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
