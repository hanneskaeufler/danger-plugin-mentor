import { URL } from "url"
import Tip from "./tip"

/* tslint:disable:max-line-length */
export default function AllTips(): Tip[] {
  return [
    new Tip("Always make an effort to use good variable names.", new URL("http://example.com"), ["ci"]),
    new Tip(
      "Be consistent with style, meaning things like indentation, spacing around functions etc.",
      new URL("http://example.com"),
      ["java"]
    ),
    new Tip("Be nice.", new URL("http://example.com"), ["testing"]),
  ]
}
