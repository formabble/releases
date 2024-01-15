---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# DemultiplyAlpha

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The image to apply the demultiplication of alpha channels to. | | [`Image`](../../types/#image) |
| `<output>` ||The image as a result of the application of the demultiplication of alpha channels. | | [`Image`](../../types/#image) |

</div>

Applies the demultiplication of alpha channels of an image to its RGB channels. Does nothing if the image has already been demultiplied or never been premultiplied in Shards. This mainly applies to PNG images.

--8<-- "includes/license.md"

