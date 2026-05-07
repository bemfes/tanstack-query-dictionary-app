import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SearchInput from "../SearchInput";
import SearchResult from "../SearchResult";

const SearchWord = () => {
  const [searchValue, setSearchValue] = useState<string>("keyboard");

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
  };
  const onClickButtonSearch = () => {
    refetch();
  };
  const onClickButtonDeleteSearchValue = () => {
    setSearchValue("");
  };
  const onKeyDownSearchInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      refetch();
    }
  };

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["search"],
    queryFn: getData,
  });

  return (
    <>
      <SearchInput
        inputValue={searchValue}
        onKeyDownSearchInput={onKeyDownSearchInput}
        onChangeSearchInput={onChangeSearchInput}
        onClickButtonSearch={onClickButtonSearch}
        onClickButtonDeleteSearchValue={onClickButtonDeleteSearchValue}
      />
      <SearchResult data={data} isLoading={isLoading} error={error} />
    </>
  );
};

export default SearchWord;
