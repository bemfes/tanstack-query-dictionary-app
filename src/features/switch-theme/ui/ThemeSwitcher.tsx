import { type FC } from "react";
import Button from "@/shared/ui/Button";
import { useThemeContext } from "../model";
import IconMoon from "@/shared/assets/icon-moon.svg?react";
import "./ThemeSwitcher.css";

const ThemeSwitcher: FC = () => {
  const { changeTheme, theme } = useThemeContext();
  return (
    <div className="switcher-box">
      <Button
        className={`${theme === "dark" ? "switcher-btn_dark" : ""} switcher-btn btn`}
        onClick={changeTheme}
      ></Button>
      <IconMoon className="icon-moon" />
    </div>
  );
};

export default ThemeSwitcher;
