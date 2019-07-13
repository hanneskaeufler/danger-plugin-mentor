import { URL } from "url"

/**
 * The interface all tips have to adhere to.
 */
export interface Tip {
  toMarkdown(): string
  hasAnyTag(tags: string[]): boolean
}

export class MentorTip implements Tip {
  private readonly tags: string[]
  private readonly text: string
  private readonly source: URL

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
