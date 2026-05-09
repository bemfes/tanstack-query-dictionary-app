import type { DictionaryWordType } from "../model";
import { DICTIONARY_API_URL } from "./constants";

export const getWord = async function (
  searchValue: string,
): Promise<DictionaryWordType[]> {
  const res = await fetch(`${DICTIONARY_API_URL}${searchValue}`);
  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("Word not found (404). Please check your input.");
    } else {
      throw new Error(`Error: ${res.status} (${res.statusText})`);
    }
  }
  return res.json();
};
