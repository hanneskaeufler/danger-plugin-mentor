import { URL } from "url"
import Tip from "./tip"

/* tslint:disable:max-line-length */
export default function AllTips(): Tip[] {
  return [
    new Tip(
      "Always make an effort to use good variable names. This produces self-documenting code and will help your collegues or future you understand the code at a glance. ",
      new URL("http://wiki.c2.com/?GoodVariableNames"),
      ["clean-code"]
    ),
    new Tip(
      "Keeping a well balanced portfolio of tests will help you get quick feedback from your automated test-suite. Often times such a balance is described as the test-pyramid.",
      new URL("https://martinfowler.com/bliki/TestPyramid.html"),
      ["continuous-integration", "testing"]
    ),
    new Tip(
      "Releasing more often can get you and your team producing higher quality software.",
      new URL("https://continuousdelivery.com"),
      ["continuous-delivery", "agile"]
    ),
    new Tip(
      "Have you tried TDD? Test-Driven Development is the practice of iteratively writing automated tests before implementing production code. It's a super fun tool that can help you produce high quality code by giving you instant design feedback.",
      new URL("https://en.wikipedia.org/wiki/Test-driven_development"),
      ["testing", "agile"]
    ),
    new Tip(
      "Did you know that you can often replace a for loop by a map/filter function?",
      new URL("https://en.wikipedia.org/wiki/Functional_programming"),
      ["clean-code"]
    ),
    new Tip(
      "Be consistent with style, meaning things like indentation, spacing around functions etc.",
      new URL("http://example.com"),
      ["java"]
    ),
    new Tip("Be nice.", new URL("http://example.com"), ["testing"]),
  ]
}
