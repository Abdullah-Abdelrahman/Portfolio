import { AboutMeSection } from "../components/AboutMeSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
import { FooterSection } from "../components/FooterSection.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { NavBar } from "../components/NavBar.jsx";
import { ProjectsSection } from "../components/ProjectsSection.jsx";
import { SkillsSection } from "../components/SkillsSection.jsx";
import { StarBackground } from "../components/StarBackground.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";

export const Home = () => {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">
      <ThemeToggle />

      <StarBackground />

      <NavBar />

      <main>
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};
export default Home;
