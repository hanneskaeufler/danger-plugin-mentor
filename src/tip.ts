export default class Tip {
  private text: string
  private source?: URL

  constructor(text: string, source?: URL) {
    this.text = text
    this.source = source
  }

  toMarkdown(): string {
    if (this.source) {
      return `${this.text} Source: [${this.source}](${this.source})`
    }

    return this.text
  }
}
