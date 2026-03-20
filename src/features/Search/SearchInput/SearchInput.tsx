import Button from "@/shared/ui/Button"
import Input from "@/shared/ui/Input"
import type { FC } from "react"
import type { SearchInputProps } from "./types"


const SearchInput: FC<SearchInputProps> = ({ inputValue, onChangeSearchInput, onKeyDownSearchInput,
    onClickButtonSearch, onClickButtonDeleteSearchValue
 }) => {
    return (
        <div>
            <Input value={inputValue} onKeyDown={onKeyDownSearchInput} onChange={onChangeSearchInput} type="search" placeholder="Search..."/>
            <Button onClick={onClickButtonDeleteSearchValue}>delete</Button>    
            <Button onClick={onClickButtonSearch}>search</Button>
        </div>
    )
}

export default SearchInput
