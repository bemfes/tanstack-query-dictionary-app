import { useState } from "react";
import { getWord } from "../api";
import { useQuery } from "@tanstack/react-query";

export const useSearchWord = () => {
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

  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["search"],
    queryFn: () => getWord(searchValue),
  });

  return {
    searchValue,
    onChangeSearchInput,
    onClickButtonSearch,
    onClickButtonDeleteSearchValue,
    onKeyDownSearchInput,
    data,
    isLoading,
    isFetching,
    error,
  };
};
