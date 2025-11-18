import { GraduationCap, Calendar } from "lucide-react";
import { educationData } from "@/data/education";

const EducationSection = () => {
  return (
    <section id="education" className="relative py-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground px-2 py-0.5 text-xs font-medium">
            Education
          </span>

          {/* Big heading (6xl scale) */}
          <h2 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight mt-4">
            Academic Background
          </h2>

          <p className="text-muted-foreground mt-3 sm:mt-4 text-lg leading-relaxed">
            My educational journey, certifications, and academic achievements.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              
              {/* Vertical Line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-0 top-2.5 h-full w-0.5 bg-muted" />
              )}

              {/* Dot */}
              <div className="absolute h-3 w-3 -left-[5px] top-2.5 rounded-full border-2 border-primary bg-background" />

              <div className="space-y-4">
                {/* Institution */}
                <div className="flex items-center gap-3">
                  <div className="size-9 bg-accent rounded-full flex items-center justify-center">
                    <GraduationCap className="size-5 text-muted-foreground" />
                  </div>
                  <span className="text-xl font-semibold tracking-tight">
                    {item.institution}
                  </span>
                </div>

                {/* Degree + Years */}
                <div>
                  <h3 className="text-3xl font-bold leading-snug tracking-tight">
                    {item.degree}
                  </h3>

                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <Calendar className="size-4" />
                    <span>{item.years}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Courses */}
                <div className="flex flex-wrap gap-2">
                  {item.courses.map((course, idx) => (
                    <span
                      key={idx}
                      className="bg-secondary text-secondary-foreground rounded-full px-2 py-0.5 text-xs font-medium"
                    >
                      {course}
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

export default EducationSection;
