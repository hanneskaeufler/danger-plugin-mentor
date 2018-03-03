import AllTips from "./all_tips"

describe("AllTips", () => {
  it("returns all the tips", () => {
    const tips = AllTips()

    expect(tips.length).toBeGreaterThan(0)
  })
})
