---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Inputs.MousePos

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Returns the position of the cursor represented as a vector with 2 float elements. | | [`Float2`](../../types/#float2) |

</div>

This shard returns the current logical position of the cursor within the input region, represented as a float2 vector. The first element represents the x position of the cursor, and the second element represents the y position of the cursor. The coordinates are in the same space as the input region's size, with (0,0) being the top-left corner and (input-region-width,input-region-height) being the bottom-right corner.

--8<-- "includes/license.md"

