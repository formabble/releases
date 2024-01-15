---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.ImageButton

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Action shards of the button. | | [`Image`](../../types/#image)[`GFX.Texture2D`](../../types/#gfx.texture2d) |
| `<output>` ||Indicates whether the button was clicked during this frame. | | [`Bool`](../../types/#bool) |
| `Action` |  | The shards to execute when the button is pressed. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Scale` |  | Scaling to apply to the source image. | `(1 1)` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `Size` |  | The size to render the image at. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `ScalingAware` |  | When set to true, this image's pixels will be rendered 1:1 regardless of UI context point size. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `Selected` |  | Indicates whether the button is selected. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"

Clickable button with image.

--8<-- "includes/license.md"

