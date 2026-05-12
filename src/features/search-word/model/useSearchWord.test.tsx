import { renderHook, act } from "@testing-library/react";
import { useSearchWord } from "./useSearchWord";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as api from "../api";

function tanstackWrapper() {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

describe("hook useSearchWord", () => {
  it("should return an object with correct properties", () => {
    const { result } = renderHook(useSearchWord, {
      wrapper: tanstackWrapper(),
    });
    expect(result.current).toHaveProperty("searchValue");
    expect(result.current).toHaveProperty("onChangeSearchInput");
    expect(result.current).toHaveProperty("onClickButtonSearch");
    expect(result.current).toHaveProperty("onClickButtonDeleteSearchValue");
    expect(result.current).toHaveProperty("onKeyDownSearchInput");
    expect(result.current).toHaveProperty("data");
    expect(result.current).toHaveProperty("isLoading");
    expect(result.current).toHaveProperty("isFetching");
    expect(result.current).toHaveProperty("error");
  });
  it("should set value when input changes", () => {
    const { result } = renderHook(useSearchWord, {
      wrapper: tanstackWrapper(),
    });
    expect(result.current.searchValue).toBe("keyboard");
    act(() => {
      result.current.onChangeSearchInput({
        target: { value: "apple" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.searchValue).toBe("apple");
  });
  it("should set searchValue to empty string when button is clicked", () => {
    const { result } = renderHook(useSearchWord, {
      wrapper: tanstackWrapper(),
    });
    expect(result.current.searchValue).toBe("keyboard");
    act(() => {
      result.current.onClickButtonDeleteSearchValue();
    });
    expect(result.current.searchValue).toBe("");
  });
  it("should call getWord function when user hit Enter", async () => {
    const getWordSpy = vi.spyOn(api, "getWord").mockResolvedValueOnce([]);
    const { result } = renderHook(useSearchWord, {
      wrapper: tanstackWrapper(),
    });
    await act(async () => {
      result.current.onKeyDownSearchInput({
        key: "Enter",
      } as React.KeyboardEvent<HTMLInputElement>);
    });
    expect(getWordSpy).toHaveBeenCalled();
  });
  it("should call getWord function when user click search button", async () => {
    const getWordSpy = vi.spyOn(api, "getWord").mockResolvedValueOnce([]);
    const { result } = renderHook(useSearchWord, {
      wrapper: tanstackWrapper(),
    });
    await act(async () => {
      result.current.onClickButtonSearch();
    });
    expect(getWordSpy).toHaveBeenCalled();
  });
});
