import type { DictionaryWordType } from "../../model";

export interface SearchResultProps {
  data: DictionaryWordType[] | undefined;
  isLoading: boolean;
  isFetching: boolean;
  error: Error | null;
}
