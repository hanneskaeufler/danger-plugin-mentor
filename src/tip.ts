export default class Tip {
  readonly tags: string[]
  private text: string
  private source: URL

  constructor(text: string, source: URL, tags) {
    this.text = text
    this.source = source
    this.tags = tags
  }

  toMarkdown(): string {
    return `${this.text} *Source:* [${this.source}](${this.source})`
  }
}
