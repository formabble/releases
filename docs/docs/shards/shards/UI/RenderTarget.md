---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.RenderTarget

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The image to display. | | [`GFX.Texture2D`](../../types/#gfx.texture2d) |
| `Output ➡️` ||The output of this shard will be its input. | | [`GFX.Texture2D`](../../types/#gfx.texture2d) |
| `Scale` | :fontawesome-solid-circle-plus:{title="No"} No  | Scaling to apply to the source texture. | `(1 1)` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |

</div>

Display the contents of a render target. Consumes input on the region.

--8<-- "includes/license.md"

