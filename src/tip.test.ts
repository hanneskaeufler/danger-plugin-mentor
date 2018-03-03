import { MentorTip } from "./tip"

describe("Tip", () => {
  describe("#toMarkdown", () => {
    it("concats the text and the source", () => {
      const tip = new MentorTip("A tip with a source.", new URL("http://example.com"), [])

      expect(tip.toMarkdown()).toEqual("A tip with a source. [Source](http://example.com/)")
    })
  })
})
