import Button from "@/shared/ui/Button"
import Input from "@/shared/ui/Input"
import type { FC } from "react"
import type { SearchInputProps } from "./types"
import "./SearchInput.css"
import IconClear from '@/shared/assets/icon-clear.svg?react'
import IconSearch from '@/shared/assets/icon-search.svg?react'


const SearchInput: FC<SearchInputProps> = ({ inputValue, onChangeSearchInput, onKeyDownSearchInput,
    onClickButtonSearch, onClickButtonDeleteSearchValue
 }) => {
    return (
        <div className="search-input__box">
            <div className="search-input__content">
                <Input className="search-input" value={inputValue} onKeyDown={onKeyDownSearchInput} onChange={onChangeSearchInput} type="search" placeholder="Search..."/>
                <Button className="search-input__btn" onClick={onClickButtonDeleteSearchValue}>
                    <IconClear className="search-input__icon-clear"/>    
                </Button>    
                <Button className="search-input__btn search-input__btn-left" onClick={onClickButtonSearch}>
                    <IconSearch className="search-input__icon-search"/>
                </Button>
            
            </div>
        </div>
    )
}

export default SearchInput
