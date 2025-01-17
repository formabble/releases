---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# WriteJPG

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Image`](../../types/#image) |
| `Output ➡️` ||The resulting output of the shard | | [`Bytes`](../../types/#bytes)[`Image`](../../types/#image) |
| `File` | :fontawesome-solid-circle-plus:{title="No"} No  | The file to write the image to | `none` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Quality` | :fontawesome-solid-circle-plus:{title="No"} No  | JPEG quality (0-100) | `85` | [`Int`](../../types/#int) |

</div>

Writes an image to a JPEG file or returns JPEG bytes.

--8<-- "includes/license.md"

