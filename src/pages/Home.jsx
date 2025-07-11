import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from '@/components/StarBackground';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

/* DELETE: VID STOPPED AT 41:00 MARK */
export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/* Theme Toggle: Deal with buttons on top right (dark/light mode) */}
        <ThemeToggle />

        {/* Background Effects: particles and meteor shower */}
        <StarBackground />

        {/* Navbar: self-explanatory */}
        <Navbar />

        {/* Main Content: Hero, About, Skills, Projects */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        {/* Footer */}
    </div>
}