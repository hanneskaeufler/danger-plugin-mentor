import { URL } from "url"
import mentor from "./index"
import { MentorTip } from "./tip"

declare const global: any

describe("mentor()", () => {
  beforeEach(() => {
    global.warn = jest.fn()
    global.message = jest.fn()
    global.fail = jest.fn()
    global.markdown = jest.fn()
  })

  afterEach(() => {
    global.warn = undefined
    global.message = undefined
    global.fail = undefined
    global.markdown = undefined
  })

  it("outputs a random tip about programming", () => {
    mentor()

    expect(global.message).toHaveBeenCalled()
  })

  it("accepts an array of tags", () => {
    mentor(["foo"])

    expect(global.message).toHaveBeenCalled()
  })

  it("accepts a list of tips", () => {
    mentor([], [new MentorTip("some tip", new URL("https://example.com"), [])])

    expect(global.message).toHaveBeenCalledWith(expect.stringContaining("some tip"))
  })
})
