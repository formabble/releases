---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Image

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The image to display. | | [`Image`](../../types/#image)[`GFX.Texture2D`](../../types/#gfx.texture2d) |
| `<output>` ||The output of this shard will be its input. | | [`Image`](../../types/#image)[`GFX.Texture2D`](../../types/#gfx.texture2d) |
| `Scale` |  | Scaling to apply to the source image. | `(1 1)` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `Size` |  | The size to render the image at. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `ScalingAware` |  | When set to true, this image's pixels will be rendered 1:1 regardless of UI context point size. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"

Display an image in the UI.

--8<-- "includes/license.md"

