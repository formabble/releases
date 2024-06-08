---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# SVG.ToImage

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`String`](../../types/#string)[`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The resulting output of the shard | | [`Image`](../../types/#image) |
| `Size` | :fontawesome-solid-circle-plus:{title="No"} No  | The desired output size, if (0, 0) will default to the size defined in the svg data. | `None` | [`Int2`](../../types/#int2)[`&Int2`](../../types/#contextvar)[`None`](../../types/#none) |
| `Offset` | :fontawesome-solid-circle-plus:{title="No"} No  | A positive x and y value offsets towards the right and the bottom of the screen respectively. (0.0, 0.0) by default. | `None` | [`None`](../../types/#none)[`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `Padding` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Pixels of padding to add | `None` | [`Int2`](../../types/#int2) |

</div>

Converts an SVG string or bytes to an image.

--8<-- "includes/license.md"

