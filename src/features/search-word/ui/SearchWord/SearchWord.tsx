import SearchInput from "../SearchInput";
import SearchResult from "../SearchResult";
import { useSearchWord } from "../../model";

const SearchWord = () => {
  const {
    searchValue,
    onKeyDownSearchInput,
    onChangeSearchInput,
    onClickButtonDeleteSearchValue,
    onClickButtonSearch,
    data,
    isLoading,
    error,
  } = useSearchWord();
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
