import { fireEvent, render, screen } from "@testing-library/react";
import ThemeSwitcher from "./ThemeSwitcher";
import * as useContext from "../model/useThemeContext";

describe("Theme Switcher", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("should render button", () => {
    render(<ThemeSwitcher />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should invoke onClick function when user clicks on button", () => {
    const useThemeContextSpy = vi.spyOn(useContext, "useThemeContext");
    const changeTheme = vi.fn();
    useThemeContextSpy.mockReturnValue({
      theme: "light",
      changeTheme,
    });
    render(<ThemeSwitcher />);
    const elem = screen.getByRole("button");
    fireEvent.click(elem);
    expect(changeTheme).toHaveBeenCalledTimes(1);
  });
  it("should change button classname to dark wheh the theme is dark", () => {
    const useThemeContextSpy = vi.spyOn(useContext, "useThemeContext");
    const changeTheme = vi.fn();
    useThemeContextSpy.mockReturnValue({
      theme: "dark",
      changeTheme,
    });
    render(<ThemeSwitcher />);
    const elem = screen.getByRole("button");
    expect(elem).toHaveClass("switcher-btn_dark");
  });
});
