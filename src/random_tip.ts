import AllTips from "./all_tips"
import NoTip from "./no_tip"
import { Tip } from "./tip"

const rand = max => Math.floor(Math.random() * max)

export default function RandomTip(tags: string[]): Tip {
  let tips = AllTips()

  if (tags.length > 0) {
    tips = tips.filter(tip => tip.hasAnyTag(tags))
  }

  return tips.length > 0 ? tips[rand(tips.length)] : new NoTip(tags)
}
