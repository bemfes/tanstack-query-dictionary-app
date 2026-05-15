import { act, renderHook } from "@testing-library/react";
import { useThemeContext } from "./useThemeContext";
import ThemeContextProvider from "./ThemeContextProvider";

function contextWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}

describe("Theme Context Provider", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("should toggle theme", () => {
    const { result } = renderHook(useThemeContext, { wrapper: contextWrapper });

    act(() => {
      result.current.changeTheme();
    });

    expect(result.current.theme).toBe("dark");

    act(() => {
      result.current.changeTheme();
    });

    expect(result.current.theme).toBe("light");
  });
  it("should change data-theme attribute of the body", () => {
    const { result } = renderHook(useThemeContext, { wrapper: contextWrapper });

    act(() => {
      result.current.changeTheme();
    });

    expect(document.body.getAttribute("data-theme")).toBe("dark");
  });
});
