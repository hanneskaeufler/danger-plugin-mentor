import AllTips from "./all_tips"
import Tip from "./tip"

describe("AllTips", () => {
  it("returns all the tips from the json file", () => {
    const tips = AllTips("./src/tips.test.json")

    expect(tips).toHaveLength(2)
    expect(tips).toContainEqual(new Tip("Tip 1"))
    expect(tips).toContainEqual(new Tip("Tip 2"))
  })
})
