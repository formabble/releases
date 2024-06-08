---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Animation.Timer

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`Float`](../../types/#float) |
| `Animation` | :fontawesome-solid-circle-plus:{title="No"}  | The to take the duration from | `None` | [`&[{Path: [String] Frames: [{Time: Float Value: Any None: Any}]}]`](../../types/#contextvar)[`[{Path: [String] Frames: [{Time: Float Value: Any None: Any}]}]`](../../types/#seq)[`None`](../../types/#none) |
| `Duration` | :fontawesome-solid-circle-plus:{title="No"}  | The duration of the timer, the timer will loop or stop after reaching this value | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Looped` | :fontawesome-solid-circle-plus:{title="No"}  | Loop the timer after reaching the target time | `true` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar) |
| `Rate` | :fontawesome-solid-circle-plus:{title="No"}  | The playback rate | `1` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Offset` | :fontawesome-solid-circle-plus:{title="No"}  | Timer offset | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Action` | :fontawesome-solid-circle-plus:{title="No"}  | The action to evaluate after the given Duration | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Variable` | :fontawesome-solid-circle-plus:{title="No"}  | The variable to store the result in | `None` | [`None`](../../types/#none)[`&Float`](../../types/#contextvar) |

</div>

Keeps track of an animation timer, based on the given animation

--8<-- "includes/license.md"

