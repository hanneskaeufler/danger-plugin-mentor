import AllTips from "./all_tips"
import Tip from "./tip"

function rand(max) {
  return Math.floor(Math.random() * max)
}

export default function RandomTip(tags: string[]): Tip {
  let tips
  if (tags.length === 0) {
    tips = AllTips()
  } else {
    tips = AllTips().filter(tip => {
      return tip.tags.filter(tag => tags.indexOf(tag) !== -1).length > 0
    })
  }

  return tips[rand(tips.length)]
}
