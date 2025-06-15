import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";
const ThemeProvider = ({ children }) => {
    let storedTheme = JSON.parse(localStorage.getItem('theme'))
    const [theme, setTheme] = useState(storedTheme || 'Light');
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider >
        </>

    )
}
export default ThemeProvider;