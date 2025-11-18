import Navigation from "./sections/navigation";
import Hero from "./sections/hero";
import AboutSection from "./sections/about";
import SkillsSection from "./sections/skills";
import ExperienceSection from "./sections/experience";
import EducationSection from "./sections/education";
import Projects from "./sections/projects";
import AchievementsSection from "./sections/achievements";
import BlogsLearningSection from "./sections/blogs-learning";
import WorkInProgressSection from "./sections/work-in-progress";
import Footer from "./sections/footer";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <Projects />
        <AchievementsSection />
        <BlogsLearningSection />
        <WorkInProgressSection />
      </main>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
