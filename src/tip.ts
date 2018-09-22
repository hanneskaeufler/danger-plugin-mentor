export interface Tip {
  readonly tags: string[]
  toMarkdown(): string
}

export class MentorTip implements Tip {
  readonly tags: string[]
  private text: string
  private source: URL

  constructor(text: string, source: URL, tags) {
    this.text = text
    this.source = source
    this.tags = tags
  }

  toMarkdown(): string {
    return `${this.text} [Source](${this.source})`
  }

  hasTag(tag: string): boolean {
    return this.tags.indexOf(tag) !== -1
  }
}
