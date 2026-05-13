import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render header", () => {
    const { container } = render(<Header />);
    const elem = container.querySelector("header");
    expect(elem).toBeInTheDocument();
  });
  it("should render theme switcher", () => {
    render(<Header />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
