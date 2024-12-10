---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Animation.Timer

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Outputs the current time of the animation timer | | [`Float`](../../types/#float) |
| `Animation` | :fontawesome-solid-circle-plus:{title="No"} No  | The Animation object to take the duration from. | `none` | [`Var([{Path: [String] Frames: [{Time: Float Value: Any none: Any}]}])`](../../types/#contextvar)[`[{Path: [String] Frames: [{Time: Float Value: Any none: Any}]}]`](../../types/#seq)[`None`](../../types/#none) |
| `Duration` | :fontawesome-solid-circle-plus:{title="No"} No  | The duration of the timer, the timer will loop or stop after reaching this value. | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Looped` | :fontawesome-solid-circle-plus:{title="No"} No  | If set to true, the timer will loop after reaching the target time | `true` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `Rate` | :fontawesome-solid-circle-plus:{title="No"} No  | The playback rate | `1` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Offset` | :fontawesome-solid-circle-plus:{title="No"} No  | Timer offset | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Action` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to execute whenever the shard reached the specified duration. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Variable` | :fontawesome-solid-circle-plus:{title="No"} No  | The variable to store the current time of the timer in. | `none` | [`None`](../../types/#none)[`Var(Float)`](../../types/#contextvar) |

</div>

This shard sets a duration (either taken form the animation object in the Animation Parameter or specified in the Duration parameter) and executes the shards specified in the Action parameter whenever that duration is reached.

--8<-- "includes/license.md"

