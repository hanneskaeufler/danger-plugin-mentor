import { URL } from "url"
import fromJson from "./from_json"
import { MentorTip } from "./tip"

describe("fromJson()", () => {
  it("returns an empty array for an empty array", () => {
    expect(fromJson("[]")).toEqual([])
  })

  it("throws for malformed json", () => {
    expect(() => fromJson("")).toThrowError()
  })

  it("returns a single mentor tip", () => {
    expect(
      fromJson(`[
      {"text": "text", "source": "https://example.com", "tags": []}
    ]`)
    ).toEqual([new MentorTip("text", new URL("https://example.com"), [])])
  })

  it("returns a list of tips", () => {
    expect(
      fromJson(`[
      {"text": "a", "source": "https://example.com", "tags": []},
      {"text": "b", "source": "https://null.com", "tags": []}
    ]`)
    ).toEqual([
      new MentorTip("a", new URL("https://example.com"), []),
      new MentorTip("b", new URL("https://null.com"), []),
    ])
  })

  it("parses tags", () => {
    expect(
      fromJson(`[
      {"text": "", "source": "https://example.com", "tags": ["testing", "agile"]}
    ]`)
    ).toEqual([new MentorTip("", new URL("https://example.com"), ["testing", "agile"])])
  })
})
