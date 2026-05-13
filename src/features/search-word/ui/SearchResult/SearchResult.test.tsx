import { render, screen } from "@testing-library/react";
import SearchResult from "./SearchResult";
import type { DictionaryWordType } from "../../model";

const mockData: DictionaryWordType[] = [
  {
    word: "keyboard",
    phonetic: "/ˈkiːbɔːrd/",

    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },

    phonetics: [
      {
        text: "/ˈkiːbɔːrd/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=123456",
        license: {
          name: "BY-SA 4.0",
          url: "https://creativecommons.org/licenses/by-sa/4.0",
        },
      },
    ],

    meanings: [
      {
        partOfSpeech: "noun",

        synonyms: ["keypad"],
        antonyms: [],

        definitions: [
          {
            definition:
              "A set of keys used to operate a computer or typewriter.",
            example: "She bought a mechanical keyboard for gaming.",
            synonyms: ["keypad"],
            antonyms: [],
          },
        ],
      },
    ],

    sourceUrls: ["https://en.wiktionary.org/wiki/keyboard"],
  },
];

describe("Search Result", () => {
  it("should render loading text when there is no data yet", () => {
    render(
      <SearchResult
        data={undefined}
        isFetching={true}
        isLoading={true}
        error={null}
      />,
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  it("should render error text when there is an error", () => {
    render(
      <SearchResult
        data={undefined}
        isFetching={false}
        isLoading={false}
        error={new Error("Something went wrong")}
      />,
    );
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });
  it("should render data when there is a data", () => {
    render(
      <SearchResult
        data={mockData}
        isFetching={false}
        isLoading={false}
        error={null}
      />,
    );
    expect(screen.getByText("keyboard")).toBeInTheDocument();
  });
});
