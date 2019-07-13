import NoTip from "./no_tip"
import { Tip } from "./tip"

const rand = max => Math.floor(Math.random() * max)

export default function RandomTip(tips: Tip[], tags: string[]): Tip {
  if (tags.length > 0) {
    tips = tips.filter(tip => tip.hasAnyTag(tags))
  }

  return tips.length > 0 ? tips[rand(tips.length)] : new NoTip(tags)
}
