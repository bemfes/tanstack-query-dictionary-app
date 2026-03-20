import type { FC } from "react";
import type { SearchResultProps } from "./types";

const SearchResult: FC<SearchResultProps> = ({ data, isLoading, error }) => {
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {!isLoading && data && !error && <p>data</p>}
            { error && <p>{error.message}</p> }
        </div>
    )
}

export default SearchResult
