import type { FC } from "react";
import ThemeSwitcher from "@/features/switch-theme/ui";
import "./Header.css";
import IconBook from "@/shared/assets/icon-book.svg?react";

const Header: FC = () => {
  return (
    <header className="header">
      <IconBook className="icon-book" />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
