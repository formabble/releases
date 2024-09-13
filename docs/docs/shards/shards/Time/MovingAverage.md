---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Time.MovingAverage

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The floating point number to compute the average of. | | [`Float`](../../types/#float) |
| `Output ➡️` ||The average of the floating point number over the specified number of frames. | | [`Float`](../../types/#float) |
| `Window` | :fontawesome-solid-circle-plus:{title="No"} No  | The sample size in frames | `16` | [`Int`](../../types/#int) |
| `Clear` | :fontawesome-solid-circle-plus:{title="No"} No  | Set to true to clear the moving average | `none` | [`None`](../../types/#none)[`Var(Bool)`](../../types/#contextvar) |

</div>

This shard computes the average of a floating point number over a specified number of frames.

## Details

--8<-- "details/shards/Time/MovingAverage.md"


--8<-- "includes/license.md"

