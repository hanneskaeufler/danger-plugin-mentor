import { MentorTip } from "./tip"

describe("Tip", () => {
  describe("#hasTag", () => {
    it("returns false for a tip with no tags", () => {
      const tipNoTags = new MentorTip("A tip with a source.", new URL("http://example.com"), [])

      expect(tipNoTags.hasTag("someTag")).toBeFalsy()
    })

    it("returns true for a contained tag", () => {
      const tip = new MentorTip("A tip with a source.", new URL("http://example.com"), ["testing"])
      const multiple = new MentorTip("A tip with a source.", new URL("http://example.com"), ["testing", "other"])

      expect(tip.hasTag("testing")).toBeTruthy()
      expect(tip.hasTag("other")).toBeFalsy()
      expect(multiple.hasTag("other")).toBeTruthy()
    })
  })

  describe("#toMarkdown", () => {
    it("concats the text and the source", () => {
      const tip = new MentorTip("A tip with a source.", new URL("http://example.com"), [])

      expect(tip.toMarkdown()).toEqual("A tip with a source. [Source](http://example.com/)")
    })
  })
})
