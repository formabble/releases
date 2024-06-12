---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# FloatsToImage

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A sequence of floating-point numbers that will be converted into an image. The sequence should be structured such that the total number of elements is equal to Width * Height * Channels. | | [`[Float]`](../../types/#seq) |
| `Output ➡️` ||The output is an image created from the input sequence of floating-point numbers. The dimensions and channels of the image are determined by the parameters provided. | | [`Image`](../../types/#image) |
| `Width` | :fontawesome-solid-circle-plus:{title="No"} No  | The width of the output image. | `16` | [`Int`](../../types/#int) |
| `Height` | :fontawesome-solid-circle-plus:{title="No"} No  | The height of the output image. | `16` | [`Int`](../../types/#int) |
| `Channels` | :fontawesome-solid-circle-plus:{title="No"} No  | The channels of the output image. | `1` | [`Int`](../../types/#int) |

</div>

Converts a sequence of floating-point numbers into an image. The image dimensions (width and height) and the number of channels are specified by parameters.

--8<-- "includes/license.md"

