---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.ViewProjectionMatrix

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A view object created by GFX.View. | | [`GFX.View`](../../types/#gfx.view) |
| `Output ➡️` ||A 4x4 matrix representing the view object's combined view-projection matrix. | | [`[Float4](4)`](../../types/#seq) |
| `ViewSize` | :fontawesome-solid-circle-plus:{title="No"} No  | The size of the screen this view is being used with | `none` | [`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |

</div>

This shard takes the input view object and outputs its combined view-projection matrix, which encapsulates both the view position and orientation(view matrix) and its orthographic projection(projection matrix).

--8<-- "includes/license.md"

