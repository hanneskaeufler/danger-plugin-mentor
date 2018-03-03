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
      return tip.tags.filter(tag => tags.indexOf(tag) !== -1).length > 0
    })
  }

  return tips.length > 0 ? tips[rand(tips.length)] : new NoTip(tags)
}
