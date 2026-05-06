import { ThemeContext } from "./context";
import { useContext } from "react";

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
