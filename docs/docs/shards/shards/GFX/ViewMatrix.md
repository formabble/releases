---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.ViewMatrix

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A view object created by GFX.View. | | [`GFX.View`](../../types/#gfx.view) |
| `Output ➡️` ||A 4x4 matrix representing the view object's view matrix. | | [`[Float4](4)`](../../types/#seq) |

</div>

This shard takes the input view object and returns its view matrix, which represents the camera's position and orientation in the world space.

--8<-- "includes/license.md"

