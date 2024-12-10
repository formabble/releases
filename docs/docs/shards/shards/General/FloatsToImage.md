---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# FloatsToImage

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes a sequence of floats as input and converts it into an image. The sequence length must be equal to Width x Height x Channels. | | [`[Float]`](../../types/#seq) |
| `Output ➡️` ||This shard outputs and image. | | [`Image`](../../types/#image) |
| `Width` | :fontawesome-solid-circle-plus:{title="No"} No  | The width of the output image. | `16` | [`Int`](../../types/#int) |
| `Height` | :fontawesome-solid-circle-plus:{title="No"} No  | The height of the output image. | `16` | [`Int`](../../types/#int) |
| `Channels` | :fontawesome-solid-circle-plus:{title="No"} No  | The channels of the output image. | `1` | [`Int`](../../types/#int) |

</div>

Converts a sequence of floats into an image. The image dimensions (width and height) and the number of channels are specified by the appropriate parameters.

--8<-- "includes/license.md"

