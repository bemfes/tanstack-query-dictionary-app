import SearchInput from "@/features/Search/SearchInput/SearchInput";
import SearchResult from "@/features/Search/SearchResult/SearchResult";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const SearchWord = () => {
  
    const [searchValue, setSearchValue] = useState<string>('keyboard')

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement >) => {
        const value = e.target.value.toLowerCase()
        setSearchValue(value)
    }
    const onClickButtonSearch = () => {
        refetch()
    }
    const onClickButtonDeleteSearchValue = () => {
        setSearchValue('')
    }
    const onKeyDownSearchInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            refetch()
        }
        
    }
    const getData = async function() {
        try {
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
            if (!res.ok) {
                if (res.status === 404) {
                    throw new Error('Word not found (404). Please check your input.')
                } else {
                    throw new Error(`Error: ${res.status} (${res.statusText})`)
                }
            }
            const data = await res.json()
            return data
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
        }
        

    }
    const { data, isLoading, error, refetch } = useQuery({ queryKey: ['search'], queryFn: getData,
     })
    
    return (
        <>
            <SearchInput 
             inputValue={searchValue} 
             onKeyDownSearchInput={onKeyDownSearchInput}
             onChangeSearchInput={onChangeSearchInput}
             onClickButtonSearch={onClickButtonSearch}
             onClickButtonDeleteSearchValue={onClickButtonDeleteSearchValue}
             />
            <SearchResult data={data} isLoading={isLoading} error={error}/>
            

        </>
    )
}

export default SearchWord
