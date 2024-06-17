---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.ImageButton

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Action shards of the button. | | [`Image`](../../types/#image)[`GFX.Texture2D`](../../types/#gfx.texture2d) |
| `Output ➡️` ||Indicates whether the button was clicked during this frame. | | [`Bool`](../../types/#bool) |
| `Action` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to execute when the button is pressed. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Scale` | :fontawesome-solid-circle-plus:{title="No"} No  | Scaling to apply to the source image. | `@f2(1 1)` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `Size` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The size to render the image at. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `ScalingAware` | :fontawesome-solid-circle-plus:{title="No"} No  | When set to true, this image's pixels will be rendered 1:1 regardless of UI context point size. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `Selected` | :fontawesome-solid-circle-plus:{title="No"} No  | Indicates whether the button is selected. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Clickable button with image.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/ImageButton/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/ImageButton/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

