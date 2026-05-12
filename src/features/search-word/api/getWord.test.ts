import { DICTIONARY_API_URL } from "./constants";
import { getWord } from "./getWord";

const data = [{ word: "apple" }];

const fetchSpy = vi.spyOn(global, "fetch");

describe("Async function getWord", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("should return data when request is successfull", async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: true,
      json: async () => data,
    } as Response);
    const result = await getWord("apple");
    expect(result).toEqual(data);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${DICTIONARY_API_URL}apple`);
  });
  it("should throw 404 error when word is not found", async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: false,
      status: 404,
    } as Response);
    await expect(getWord("compasse")).rejects.toThrow(
      "Word not found (404). Please check your input.",
    );
  });
  it("should throw an error when something is wrong", async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    } as Response);
    await expect(getWord("compasse")).rejects.toThrow(
      "Error: 500 (Internal Server Error)",
    );
  });
  it("should throw an error when fetch is rejected", async () => {
    fetchSpy.mockRejectedValueOnce(new Error("Network error"));
    await expect(getWord("apple")).rejects.toThrow("Network error");
  });
});
