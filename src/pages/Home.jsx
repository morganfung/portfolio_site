import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from '@/components/StarBackground';

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

        {/* Footer */}
    </div>
}