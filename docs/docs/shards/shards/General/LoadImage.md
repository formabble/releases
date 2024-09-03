---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# LoadImage

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||An image represented as a byte array | | [`Bytes`](../../types/#bytes)[`Any`](../../types/#any) |
| `Output ➡️` ||The image as an image type. | | [`Image`](../../types/#image) |
| `File` | :fontawesome-solid-circle-plus:{title="No"} No  | The file to load the image from | `None` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar)[`None`](../../types/#none) |
| `BPP` | :fontawesome-solid-circle-plus:{title="No"} No  | bits per pixel (HDR images loading and such!) | `BPP::u8` | [`BPP`](../../../enums/BPP) |
| `PremultiplyAlpha` | :fontawesome-solid-circle-plus:{title="No"} No  | Toggle premultiplication of alpha channel | `false` | [`Bool`](../../types/#bool) |

</div>

This shard loads an image from a file (specified in the File parameter) or byte array (passed as input) and returns it as an image type, that can subsequently be used by other shards such as UI.Image and UI.ImageButton.

## Details

--8<-- "details/shards/General/LoadImage.md"


--8<-- "includes/license.md"

