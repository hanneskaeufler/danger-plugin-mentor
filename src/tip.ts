type Tag = string

export default class Tip {
  private text: string
  private source: URL
  private tags: Tag[]

  constructor(text: string, source: URL, tags) {
    this.text = text
    this.source = source
    this.tags = tags
  }

  toMarkdown(): string {
    if (this.source) {
      return `${this.text} Source: [${this.source}](${this.source})`
    }

    return this.text
  }
}
