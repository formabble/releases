---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Inputs.MousePixelPos

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Outputs the pixel position of the cursor represented as a vector with 2 int elements. | | [`Int2`](../../types/#int2) |

</div>

This shard outputs the current pixel position of the cursor within the input region, represented as an int2 vector. The first element represents the x position of the cursor, and the second element represents the y position of the cursor. The coordinates are in pixel space, with (0,0) being the top-left corner of the input region and (input-region-pixel-width, input-region-pixel-height) being the bottom-right corner.

--8<-- "includes/license.md"

