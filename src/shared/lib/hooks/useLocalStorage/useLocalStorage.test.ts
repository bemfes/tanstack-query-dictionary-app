import { act, renderHook } from "@testing-library/react";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("should return initial value", () => {
    const { result } = renderHook(() => useLocalStorage("theme", "light"));
    const [value] = result.current;
    expect(value).toBe("light");
  });
  it("should set new value and return it", () => {
    localStorage.setItem("theme", JSON.stringify("dark"));
    const { result } = renderHook(() => useLocalStorage("theme", "light"));
    const [value] = result.current;
    expect(value).toBe("dark");
  });
  it("should return initial value when JSON.parse throws an error", () => {
    localStorage.setItem("theme", "invalid");
    const { result } = renderHook(() => useLocalStorage("theme", "light"));
    const [value] = result.current;
    expect(value).toBe("light");
  });
  it("should save new value to local storage", () => {
    const { result } = renderHook(() => useLocalStorage("theme", "light"));
    const [, setValue] = result.current;
    act(() => {
      setValue("dark");
    });
    expect(localStorage.getItem("theme")).toBe(JSON.stringify("dark"));
  });
});
