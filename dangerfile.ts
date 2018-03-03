import { danger, message, schedule, warn } from "danger"
import mentor from "danger-plugin-mentor"
import yarn from "danger-plugin-yarn"

if (!danger.github.pr.body) {
  warn("Please add a PR description.")
}

schedule(yarn())

mentor()
