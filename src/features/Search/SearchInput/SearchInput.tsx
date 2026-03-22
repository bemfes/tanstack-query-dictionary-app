import Button from "@/shared/ui/Button"
import Input from "@/shared/ui/Input"
import type { FC } from "react"
import type { SearchInputProps } from "./types"
import "./SearchInput.css"


const SearchInput: FC<SearchInputProps> = ({ inputValue, onChangeSearchInput, onKeyDownSearchInput,
    onClickButtonSearch, onClickButtonDeleteSearchValue
 }) => {
    return (
        <div className="search-input__box">
            <div className="search-input__content">
                <Input className="search-input" value={inputValue} onKeyDown={onKeyDownSearchInput} onChange={onChangeSearchInput} type="search" placeholder="Search..."/>
                <Button onClick={onClickButtonDeleteSearchValue}>delete</Button>    
                <Button onClick={onClickButtonSearch}>search</Button>
            
            </div>
        </div>
    )
}

export default SearchInput
