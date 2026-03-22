import type { DictionaryWordType } from "@/shared/types/DictionaryWordType";

export interface SearchResultProps {
    data: DictionaryWordType[];
    isLoading: boolean;
    error: Error | null;
}