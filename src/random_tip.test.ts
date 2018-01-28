import { mockRandomForEach } from "jest-mock-random"
import RandomTip from "./random_tip"
import Tip from "./tip"

describe("RandomTip", () => {
  mockRandomForEach([0.0, 0.9])

  it("returns a tip", () => {
    expect(RandomTip()).toBeInstanceOf(Tip)
  })

  it("returns random tips", () => {
    expect(RandomTip()).not.toMatchObject(RandomTip())
  })
})
