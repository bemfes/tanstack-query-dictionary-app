import type { DictionaryWordType } from "../../model";

export interface SearchResultProps {
  data: DictionaryWordType[] | undefined;
  isLoading: boolean;
  error: Error | null;
}
