---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# LoadImage

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Bytes`](../../types/#bytes)[`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Image`](../../types/#image) |
| `File` | :fontawesome-solid-circle-plus:{title="No"} No  | The file to load the image from | `None` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar)[`None`](../../types/#none) |
| `BPP` | :fontawesome-solid-circle-plus:{title="No"} No  | bits per pixel (HDR images loading and such!) | `BPP::u8` | [`BPP`](../../../enums/BPP) |
| `PremultiplyAlpha` | :fontawesome-solid-circle-plus:{title="No"} No  | Toggle premultiplication of alpha channel | `false` | [`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

