import { create } from "zustand";

const useThemeStore = create((set) => {
    const getSystemTheme = () => {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            return "dark";
        }
        return "light";
    };

    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : getSystemTheme();
    };

    return {
        theme: getInitialTheme(),
        toggleTheme: () =>
            set((state) => {
                const newTheme = state.theme === "light" ? "dark" : "light";
                localStorage.setItem("theme", newTheme);
                return { theme: newTheme };
            }),
    };
});

export default useThemeStore;
