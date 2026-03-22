import type { FC } from "react";
import type { SearchResultProps } from "./types";
import type { DictionaryWordType } from "@/shared/types/DictionaryWordType";

const SearchResult: FC<SearchResultProps> = ({ data, isLoading, error }) => {
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {!isLoading && data && !error && <div>
                {
                    data.map( (item: DictionaryWordType, index) => (
                        <div key={index}>
                            <p>{item.word}</p>
                            <p>{item.phonetic}</p>
                            <div>
                                {item.meanings.map(meaning => (
                                    <>
                                    <p>{meaning.partOfSpeech}</p>
                                    <div>
                                        {meaning.definitions.map(defs => (
                                            <p>{defs.definition}</p>
                                        ))}
                                    </div>
                                    </>
                                    
                                ))}
                            </div>
                        </div>
                    ))
                }
               
                
            </div>}
            { error && <p>{error.message}</p> }
        </div>
    )
}

export default SearchResult
