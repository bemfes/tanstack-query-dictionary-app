export interface SearchInputProps {
    inputValue: string;
    onChangeSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDownSearchInput: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onClickButtonSearch: () => void;
    onClickButtonDeleteSearchValue: () => void;

}