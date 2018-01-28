import Tip from "./tip"

describe("Tip", () => {
  describe("#toMarkdown", () => {
    it("concats the text and the source", () => {
      const tip = new Tip("A tip with a source.", new URL("http://example.com"))

      expect(tip.toMarkdown()).toEqual("A tip with a source. Source: [http://example.com/](http://example.com/)")
    })

    it("leaves out the source if not present", () => {
      const tip = new Tip("A tip with no source.")
      expect(tip.toMarkdown()).toEqual("A tip with no source.")
    })
  })
})
