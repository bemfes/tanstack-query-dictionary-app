import type { DictionaryWordType } from "../../model";

export interface SearchResultProps {
  data: DictionaryWordType[];
  isLoading: boolean;
  error: Error | null;
}
