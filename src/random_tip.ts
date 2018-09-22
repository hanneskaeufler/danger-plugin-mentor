import AllTips from "./all_tips"
import NoTip from "./no_tip"
import { MentorTip, Tip } from "./tip"

function rand(max) {
  return Math.floor(Math.random() * max)
}

export default function RandomTip(tags: string[]): Tip {
  let tips = AllTips()

  if (tags.length > 0) {
    tips = tips.filter(tip => {
      return tip.hasAnyTag(tags)
    })
  }

  return tips.length > 0 ? tips[rand(tips.length)] : new NoTip(tags)
}
