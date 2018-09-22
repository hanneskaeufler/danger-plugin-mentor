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

  hasAnyTag(tags: string[]): boolean {
    return this.tags.filter(tag => tags.indexOf(tag) !== -1).length > 0
  }
}
