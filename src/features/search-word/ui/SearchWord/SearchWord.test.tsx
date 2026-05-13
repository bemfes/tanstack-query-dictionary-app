import { fireEvent, render, screen } from "@testing-library/react";
import SearchWord from "./SearchWord";
import * as api from "../../api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function tanstackWrapper() {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

describe("Search Word", () => {
  it("should return word data after search", async () => {
    vi.spyOn(api, "getWord").mockResolvedValue([
      {
        word: "apple",
        phonetic: "/ˈæpəl/",
        meanings: [],
        phonetics: [],
        license: { name: "", url: "" },
        sourceUrls: [],
      },
    ]);
    render(<SearchWord />, { wrapper: tanstackWrapper() });
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "apple" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    const result = await screen.findByText("/ˈæpəl/");
    expect(result).toBeInTheDocument();
  });
});
