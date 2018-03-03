import { Tip } from "./tip"

export default class NoTip implements Tip {
  readonly tags: string[]

  toMarkdown(): string {
    return "danger-plugin-mentor: No tip found"
  }
}
