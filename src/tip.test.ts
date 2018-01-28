import Tip from "./tip"

describe("Tip", () => {
  describe("#toMarkdown", () => {
    it("concats the text and the source", () => {
      expect(new Tip("A tip with a source.", new URL("http://example.com")).toMarkdown()).toEqual(
        "A tip with a source. Source: [http://example.com/](http://example.com/)"
      )
    })

    it("leaves out the source if not present", () => {
      expect(new Tip("A tip with a source.").toMarkdown()).toEqual("A tip with a source.")
    })
  })
})
