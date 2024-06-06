---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Animation.Timer

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`Float`](../../types/#float) |
| `Animation` |  | The to take the duration from | `None` | [`&[{Path: [String] Frames: [{Time: Float Value: Any None: Any}]}]`](../../types/#contextvar)[`[{Path: [String] Frames: [{Time: Float Value: Any None: Any}]}]`](../../types/#seq)[`None`](../../types/#none) |
| `Duration` |  | The duration of the timer, the timer will loop or stop after reaching this value | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Looped` |  | Loop the timer after reaching the target time | `true` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar) |
| `Rate` |  | The playback rate | `1` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Offset` |  | Timer offset | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Action` |  | The action to evaluate after the given Duration | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Variable` |  | The variable to store the result in | `None` | [`None`](../../types/#none)[`&Float`](../../types/#contextvar) |

</div>

Keeps track of an animation timer, based on the given animation

--8<-- "includes/license.md"

