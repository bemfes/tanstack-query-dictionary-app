import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should render button", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should have classname", () => {
    render(<Button className="btn" />);
    expect(screen.getByRole("button")).toHaveClass("btn");
  });
  it("should have children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
  it("should invoke onClick callback when user clicks", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick} />);
    const element = screen.getByRole("button");
    fireEvent.click(element);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
