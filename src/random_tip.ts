import AllTips from "./all_tips"
import Tip from "./tip"

export default function RandomTip(): Tip {
  const tips = AllTips("./src/tips.json")
  const rand = Math.floor(Math.random() * tips.length)

  return tips[rand]
}
