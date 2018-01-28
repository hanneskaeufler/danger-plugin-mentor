import * as fs from "fs"
import Tip from "./tip"

export default function AllTips(fromFile: string): Tip[] {
  const source = JSON.parse(fs.readFileSync(fromFile, "utf-8"))

  return source.tips.map((tipData) => {
    return new Tip(tipData.text)
  })
}
