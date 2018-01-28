import mentor from "./index"

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

    expect(global.message).toHaveBeenCalledWith(expect.stringMatching(/the tip/))
  })
})
