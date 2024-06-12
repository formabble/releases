---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BytesToInts

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A sequence of bytes or an image that will be converted into a sequence of another type. Each byte or pixel in the input is interpreted according to the specified type. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The output is a sequence of the specified type created from the input bytes or image. Each byte or pixel is converted to an element of the output sequence. | | [`[Int]`](../../types/#seq) |

</div>

Converts a sequence of bytes or an image into a sequence of another specified type. Each byte or pixel in the input is interpreted and converted to an element of the output sequence of the specified type.

--8<-- "includes/license.md"

