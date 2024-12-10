---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# PremultiplyAlpha

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The image to apply the premultiplication of alpha channels to. | | [`Image`](../../types/#image) |
| `Output ➡️` ||The image as a result of the application of the premultiplication of alpha channels. | | [`Image`](../../types/#image) |

</div>

Applies the premultiplication of alpha channels of an image to its RGB channels. Does nothing if the image has already been premultiplied in Shards. This mainly applies to PNG images.

--8<-- "includes/license.md"

