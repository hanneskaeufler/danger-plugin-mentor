import { mockRandomForEach } from "jest-mock-random"
import NoTip from "./no_tip"
import RandomTip from "./random_tip"
import { MentorTip, Tip } from "./tip"

describe("RandomTip", () => {
  mockRandomForEach([0.0, 0.9])

  it("returns a tip", () => {
    expect(RandomTip([])).toBeInstanceOf(MentorTip)
  })

  it("returns random tips", () => {
    expect(RandomTip([])).not.toMatchObject(RandomTip([]))
  })

  it("can filter by tag", () => {
    expect(RandomTip(["testing"]).hasAnyTag(["testing"])).toBeTruthy()
  })

  it("returns a NoTip when no tip was found", () => {
    const tip = RandomTip(["definately-not-available"])
    expect(tip).toBeInstanceOf(NoTip)
  })
})
