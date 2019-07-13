import { mockRandomForEach } from "jest-mock-random"
import { URL } from "url"
import NoTip from "./no_tip"
import RandomTip from "./random_tip"
import { MentorTip, Tip } from "./tip"

describe("RandomTip", () => {
  mockRandomForEach([0.0, 0.9])

  it("returns a tip from the given list of tips", () => {
    const someTip = new MentorTip("", new URL("https://example.com"), [])
    expect(RandomTip([someTip], [])).toBe(someTip)
  })

  it("returns random tips", () => {
    const tips = [
      new MentorTip("some", new URL("https://example.com"), []),
      new MentorTip("other", new URL("https://example.com"), []),
    ]
    expect(RandomTip(tips, [])).not.toMatchObject(RandomTip(tips, []))
  })

  it("can filter by tag", () => {
    const tips = [
      new MentorTip("some", new URL("https://example.com"), []),
      new MentorTip("other", new URL("https://example.com"), ["testing"]),
    ]
    expect(RandomTip(tips, ["testing"]).hasAnyTag(["testing"])).toBeTruthy()
  })

  it("returns a NoTip when no tip was found", () => {
    const tip = RandomTip([], ["definately-not-available"])
    expect(tip).toBeInstanceOf(NoTip)
  })
})
