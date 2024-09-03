---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.ViewRange

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A view object created by GFX.View. | | [`GFX.View`](../../types/#gfx.view) |
| `Output ➡️` ||A float2 representing the view's near and far clipping range. | | [`Float2`](../../types/#float2) |

</div>

This shard takes the input view object and returns a float2 representing the view's near and far clipping range. The first value in the float2 represents the near clipping range while the second value represents the far clipping range.

--8<-- "includes/license.md"

