// Provides dev-time type structures for `danger` - doesn't affect runtime.
import { DangerDSLType } from "../node_modules/danger/distribution/dsl/DangerDSL"
import AllTips from "./all_tips"
import RandomTip from "./random_tip"
import { Tip } from "./tip"
declare var danger: DangerDSLType
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void
export declare function markdown(message: string): void

/**
 * Level up your programming skills by getting bite-sized tips and tricks in your pull requests.
 */
export default function mentor(tags: string[] = [], tips: Tip[] = AllTips()) {
  message(RandomTip(tips, tags).toMarkdown())
}

/**
 * All the tips that mentor comes included with.
 */
export function defaultTips() {
  return AllTips()
}

export { Tip } from "./tip"
export { default as fromJson } from "./from_json"
