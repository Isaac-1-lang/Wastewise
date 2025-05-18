import { create } from "zustand";


export const useThemeStore = create((set)=> {
  const savedTheme = localStorage.getItem("chat-theme") || "luxury";

  document.documentElement.setAttribute("data-theme") || "luxury";


  return {
    theme:savedTheme,
    setTheme:(theme) => {
      set({ theme });
      localStorage.setItem("chat-theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }
})