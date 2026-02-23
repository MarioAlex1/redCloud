import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors, darkColors, lightColors } from "./colors";

export type ThemeMode = "dark" | "light";

interface ThemeContextData {
    theme: ThemeMode;
    colors: Colors;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({
    theme: "dark",
    colors: darkColors,
    toggleTheme: () => {},
});

// Provedor global de tema — envolve o app e fornece cores e o toggleTheme
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeMode>("dark");

    // Carrega o tema salvo ao iniciar
    useEffect(() => {
        AsyncStorage.getItem("@theme").then((saved) => {
            if (saved === "light" || saved === "dark") {
                setTheme(saved);
            }
        });
    }, []);

    // Alterna entre dark/light e persiste a escolha no AsyncStorage
    const toggleTheme = () => {
        const next: ThemeMode = theme === "dark" ? "light" : "dark";
        setTheme(next);
        AsyncStorage.setItem("@theme", next);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                colors: theme === "dark" ? darkColors : lightColors,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

/** Hook para acessar o tema e as cores em qualquer componente */
export function useTheme() {
    return useContext(ThemeContext);
}
