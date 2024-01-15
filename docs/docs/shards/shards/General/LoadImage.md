---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# LoadImage

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Bytes`](../../types/#bytes)[`Any`](../../types/#any) |
| `<output>` || | | [`Image`](../../types/#image) |
| `File` |  | The file to read/write from. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `BPP` |  | bits per pixel (HDR images loading and such!) | `BPP.u8` | [`BPP`](../../../enums/BPP) |
| `PremultiplyAlpha` |  | Toggle premultiplication of alpha channels (E.g. To support PNG images) | `false` | [`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

