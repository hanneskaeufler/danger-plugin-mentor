import Tip from "./tip"

export default function AllTips(): Tip[] {
  return [
    new Tip("Always make an effort to use good variable names."),
    new Tip("Be consistent with style, meaning things like indentation, spacing around functions etc."),
    new Tip("Be nice."),
  ]
}
