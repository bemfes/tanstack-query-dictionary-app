import { useEffect, type FC } from "react";
import type { ThemeContextProviderProps, ThemeType } from "./types";
import { ThemeContext } from "./context";
import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage";

const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<ThemeType>("theme", "light");

  function changeTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
