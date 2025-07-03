import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
    /* Create state variable so we can tell what mode (light/dark) the site is in. */
    /* Set true to  start in light mode. */
    const [isDarkMode, setIsDarkMode] = useState(false);

    /* Toggle theme function: check if dark true -> logic, else ... */
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    };

    /* isDarkMode true? if so set button to sun, else ... */
    return (
        <button onClick={toggleTheme}>
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};