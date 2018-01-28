// Provides dev-time type structures for `danger` - doesn't affect runtime.
import { DangerDSLType } from "../node_modules/danger/distribution/dsl/DangerDSL"
import RandomTip from "./random_tip"
declare var danger: DangerDSLType
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void
export declare function markdown(message: string): void

/**
 * Level up your programming skills by getting bite-sized tips and tricks in your pull requests.
 */
export default function mentor() {
  message(RandomTip().text)
}
