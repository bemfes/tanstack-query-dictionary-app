import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  const placeholder = "type text";
  const onChange = vi.fn();

  it("should render input", () => {
    render(
      <Input
        type="text"
        value="value"
        onChange={onChange}
        placeholder={placeholder}
      />,
    );
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
  it("should render input with correct type", () => {
    render(
      <Input
        type="text"
        value="value"
        onChange={onChange}
        placeholder={placeholder}
      />,
    );
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute(
      "type",
      "text",
    );
  });
  it("should render input with correct value", () => {
    render(<Input type="text" value="value" onChange={onChange} />);
    expect(screen.getByDisplayValue("value")).toBeInTheDocument();
  });
  it("should render input with correct classname", () => {
    render(
      <Input
        type="text"
        value="value"
        onChange={onChange}
        placeholder={placeholder}
        className="input"
      />,
    );
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholder)).toHaveClass("input");
  });
  it("should call onChange when user typing", () => {
    render(
      <Input
        type="text"
        value="value"
        placeholder={placeholder}
        onChange={onChange}
      />,
    );
    const element = screen.getByPlaceholderText(placeholder);
    fireEvent.change(element, { target: { value: "abc" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it("should call onKeyDown when user hit Enter", () => {
    const onKeyDown = vi.fn();
    render(
      <Input
        type="text"
        value="value"
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />,
    );
    const element = screen.getByPlaceholderText(placeholder);
    fireEvent.keyDown(element, { key: "Enter", code: "Enter" });
    expect(onKeyDown).toHaveBeenCalled();
  });
});
