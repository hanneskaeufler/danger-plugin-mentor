import RandomTip from "./random_tip"
import Tip from "./tip"

describe("RandomTip", () => {
  it("returns a tip", () => {
    expect(RandomTip()).toBeInstanceOf(Tip)
  })

  it("never returns the same tip twice", () => {
    expect(RandomTip()).not.toMatchObject(RandomTip())
  })
})
