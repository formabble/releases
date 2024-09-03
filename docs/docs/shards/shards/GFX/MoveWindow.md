---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.MoveWindow

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The position to move the window to. The first element represents the x-coordinate and the second represents the y-coordinate. | | [`Int2`](../../types/#int2) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Int2`](../../types/#int2) |
| `Window` | :fontawesome-solid-circle-plus:{title="No"} No  | The window to move. | `None` | [`None`](../../types/#none)[`Var(Object)`](../../types/#contextvar) |

</div>

This shard moves the window specified in the Window parameter to the position specified in the input.

--8<-- "includes/license.md"

