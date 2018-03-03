import { danger, message, warn } from "danger"
import mentor from "danger-plugin-mentor"

if (!danger.github.pr.body) {
  warn("Please add a PR description.")
}

mentor()
