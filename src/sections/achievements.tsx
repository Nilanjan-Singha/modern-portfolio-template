import { Badge } from "../components/ui/badge";
import { Calendar } from "lucide-react";
import { achievementsList } from "@/data/achievements";


const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Achievements
          </Badge>

          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Milestones & Recognition
          </h2>

          <p className="text-muted-foreground mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
            A showcase of my professional milestones, certifications, and
            community contributions that shaped my journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {achievementsList.map((achievement, index) => (
            <div
              key={index}
              className="bg-accent/50 p-8 rounded-2xl border border-border/50 shadow-xs 
              transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">

                {/* Icon */}
                <achievement.icon className="h-14 w-14 text-primary mb-5" />

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight mb-2">
                  {achievement.title}
                </h3>

                {/* Date */}
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {achievement.date}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 grow">
                  {achievement.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {achievement.badges.map((badge, i) => (
                    <Badge key={i} variant="secondary" className="rounded-full">
                      {badge}
                    </Badge>
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

export default AchievementsSection;
