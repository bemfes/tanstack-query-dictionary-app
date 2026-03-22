interface License {
    name: string;
    url: string;
}

interface Definition {
    synonyms: string[];
    antonyms: string[];
    definition: string;
    example: string;
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[]
}

export interface DictionaryWordType {
    license: License;
    meanings: Meaning[];
    phonetic: string;
    phonetics: PhoneticItem[];
    sourceUrls: string[];
    word: string;
}