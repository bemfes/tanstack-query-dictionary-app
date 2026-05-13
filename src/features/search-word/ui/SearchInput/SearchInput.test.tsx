import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("Search Input", () => {
  it("should render input", () => {
    render(
      <SearchInput
        inputValue="value"
        onChangeSearchInput={vi.fn()}
        onKeyDownSearchInput={vi.fn()}
        onClickButtonSearch={vi.fn()}
        onClickButtonDeleteSearchValue={vi.fn()}
      />,
    );
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });
  it("should render button clear input", () => {
    const { container } = render(
      <SearchInput
        inputValue="value"
        onChangeSearchInput={vi.fn()}
        onKeyDownSearchInput={vi.fn()}
        onClickButtonSearch={vi.fn()}
        onClickButtonDeleteSearchValue={vi.fn()}
      />,
    );
    const element = container.querySelector(".search-input__icon-clear");
    expect(element).toBeInTheDocument();
  });
  it("should render button search", () => {
    const { container } = render(
      <SearchInput
        inputValue="value"
        onChangeSearchInput={vi.fn()}
        onKeyDownSearchInput={vi.fn()}
        onClickButtonSearch={vi.fn()}
        onClickButtonDeleteSearchValue={vi.fn()}
      />,
    );
    const element = container.querySelector(".search-input__icon-search");
    expect(element).toBeInTheDocument();
  });
});
