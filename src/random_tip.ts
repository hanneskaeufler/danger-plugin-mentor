import Tip from "./tip"

export default function RandomTip(): Tip {
  const rand = Math.floor(Math.random() * 100)

  return new Tip(`the tip ${rand}`)
}
