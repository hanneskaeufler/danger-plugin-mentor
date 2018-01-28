import AllTips from "./all_tips"

describe("AllTips", () => {
  it("returns all the tips from the json file", () => {
    const tips = AllTips("./src/tips.test.json")

    expect(tips[0].text).toBe("Always make an effort to use good variable names.")
    expect(tips).toHaveLength(3)
  })
})
