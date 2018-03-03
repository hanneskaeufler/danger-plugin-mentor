import Tip from "./tip"

describe("Tip", () => {
  describe("#toMarkdown", () => {
    it("concats the text and the source", () => {
      const tip = new Tip("A tip with a source.", new URL("http://example.com"), [])

      expect(tip.toMarkdown()).toEqual("A tip with a source. *Source:* [http://example.com/](http://example.com/)")
    })
  })
})
