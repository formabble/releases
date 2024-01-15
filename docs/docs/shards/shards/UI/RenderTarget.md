---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.RenderTarget

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The image to display. | | [`GFX.Texture2D`](../../types/#gfx.texture2d) |
| `<output>` ||The output of this shard will be its input. | | [`GFX.Texture2D`](../../types/#gfx.texture2d) |
| `Scale` |  | Scaling to apply to the source texture. | `(1 1)` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |

</div>

--8<-- "includes/experimental.md"

Display the contents of a render target. Consumes input on the region.

--8<-- "includes/license.md"

