interface License {
    name: string;
    url: string;
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[]
}

export interface DictionaryWordType {
    license: License;
    meanings: Meaning[]
    word: string;
}