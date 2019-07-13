import { URL } from "url"
import { MentorTip, Tip } from "./tip"

export default function fromJson(json: string): Tip[] {
  return JSON.parse(json).map(itemToTip)
}

function itemToTip(item): Tip {
  return new MentorTip(item.text, new URL(item.source), item.tags)
}
