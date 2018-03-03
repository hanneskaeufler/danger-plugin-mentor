import NoTip from "./no_tip"

describe("NoTip", () => {
  describe("#toMarkdown", () => {
    it("shows a sensible message", () => {
      expect(new NoTip().toMarkdown()).toEqual("danger-plugin-mentor: No tip found")
    })
  })
})
