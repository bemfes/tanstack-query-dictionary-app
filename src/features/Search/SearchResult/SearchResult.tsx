import { type FC } from "react";
import type { SearchResultProps } from "./types";
import type { DictionaryWordType } from "@/shared/types/DictionaryWordType";
import "./SearchResult.css"

const SearchResult: FC<SearchResultProps> = ({ data, isLoading, error }) => {
    
    return (
        <div>
            {isLoading && <p className="search-result-util">Loading...</p>}
            {!isLoading && data && !error && <div>
                {
                    data.map( (item: DictionaryWordType, index) => (
                        <div className="word" key={index}>
                            <p className="word__name">{item.word}</p>
                            <p className="word__phonetic">{item.phonetic}</p>
                            <div>
                                
                                {item.meanings.map((meaning, index) => (
                                    <div key={index} className="word__content">
                                    <p className="word__part-speech">{meaning.partOfSpeech}</p>
                                    <p className="word__meaning">Meaning</p>
                                    <ul className="word__defs-list">
                                        {meaning.definitions.map((defs, index) => (
                                            <li className="word__defs-list-item-box" key={index}>
                                            <p key={defs.definition} className="word__defs-list-item word__defs-list-item-dot">{defs.definition}</p>
                                            {defs.example && <p key={defs.example} className="word__defs-list-item word__defs-list-item-example">"{defs.example}"</p>}
                                            </li>
                                        ))}
                                    </ul> 
                                    
                                     {meaning.synonyms.length > 0 && <p className="word__synonym">Synonyms: <span>{
                                        meaning.synonyms.join(', ')
                                        }</span>
                                        </p>} 
                                    </div>
                                    
                                ))}
                            </div>
                            <div className="word__source">
                                Source: {
                                item.sourceUrls.map((link, index) => (
                                <div key={`${index}-${link}`}>
                                <a key={link} href={link}>{link}</a>
                                {index < item.sourceUrls.length - 1 ? ', ' : ''}
                                </div>
                            ))
                            }
                            </div>
                        </div>
                    ))
                }
               
                
            </div>}
            { error && <p className="search-result-util">{error.message}</p> }
        </div>
    )
}

export default SearchResult
