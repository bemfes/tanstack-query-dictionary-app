import SearchInput from "@/features/Search/SearchInput/SearchInput";
import SearchResult from "@/features/Search/SearchResult/SearchResult";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const SearchWord = () => {
  
    const [searchValue, setSearchValue] = useState<string>('')

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
                throw new Error('failed to fetch')
            }
            const data = await res.json()
            return data
        } catch (error) {
            
        }
        

    }
    const { data, isLoading, error, refetch } = useQuery({ queryKey: ['search'], queryFn: getData,
         enabled: false,
         retry: false,
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
