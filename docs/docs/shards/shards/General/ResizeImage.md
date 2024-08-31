---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ResizeImage

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The image to resize. | | [`Image`](../../types/#image) |
| `Output ➡️` ||The resized image. | | [`Image`](../../types/#image) |
| `Width` | :fontawesome-solid-circle-plus:{title="No"} No  | The target width. | `32` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Height` | :fontawesome-solid-circle-plus:{title="No"} No  | The target height. | `32` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |

</div>

This shard resizes an image to the specified dimensions specified in the Width and Height parameters.

--8<-- "includes/license.md"

