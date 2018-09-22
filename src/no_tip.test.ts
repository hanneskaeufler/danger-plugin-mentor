import NoTip from "./no_tip"

describe("NoTip", () => {
  describe("#hasAnyTag", () => {
    it("returns false", () => {
      expect(new NoTip([]).hasAnyTag(["foo"])).toBeFalsy()
    })
  })

  describe("#toMarkdown", () => {
    it("shows a sensible message", () => {
      expect(new NoTip(["nope", "whut"]).toMarkdown()).toEqual(
        'danger-plugin-mentor: No tip found for tags: "nope", "whut".'
      )
    })
  })
})
