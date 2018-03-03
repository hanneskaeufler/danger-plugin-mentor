import { Tip } from "./tip"

export default class NoTip implements Tip {
  readonly tags: string[]

  constructor(tags: string[]) {
    this.tags = tags
  }

  toMarkdown(): string {
    const tags = this.tags.map(tag => `"${tag}"`).join(", ")

    return `danger-plugin-mentor: No tip found for tags: ${tags}.`
  }
}
