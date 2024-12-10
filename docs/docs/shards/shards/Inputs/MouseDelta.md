---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Inputs.MouseDelta

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Outputs how much the mouse has moved since the last frame, represented as a vector with 2 float elements. | | [`Float2`](../../types/#float2) |

</div>

This shard outputs how much the mouse has moved since the last frame as a float2 vector. The first element represents the horizontal movement (a positive value indicates movement to the right), and the second element represents the vertical movement (a positive value indicates movement downwards).

--8<-- "includes/license.md"

