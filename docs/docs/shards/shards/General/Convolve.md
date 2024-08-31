---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Convolve

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The image to extract patches from. | | [`Image`](../../types/#image) |
| `Output ➡️` ||The extracted patch as an image. | | [`Image`](../../types/#image) |
| `Radius` | :fontawesome-solid-circle-plus:{title="No"} No  | The radius of the kernel, e.g. 1 = 1x1; 2 = 3x3; 3 = 5x5 and so on. | `1` | [`Int`](../../types/#int) |
| `Step` | :fontawesome-solid-circle-plus:{title="No"} No  | How many pixels to advance the centre of the patch extracted each activation. | `1` | [`Int`](../../types/#int) |

</div>

This shard extracts a patch from an image of dimensions specified in the Radius parameter and returns the extracted patch as an image. Everytime the shard is subsequently called, the centre of the patch to extract is advanced by the number of pixels specified in the Step parameter.

## Details

--8<-- "details/shards/General/Convolve.md"


--8<-- "includes/license.md"

