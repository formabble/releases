---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GetImagePixel

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Int2`](../../types/#int2) |
| `<output>` || | | [`Int4`](../../types/#int4)[`Float4`](../../types/#float4) |
| `Position` |  | The position of the pixel to retrieve | `None` | [`Image`](../../types/#image)[`&Image`](../../types/#contextvar) |
| `AsInteger` |  | Read the pixel as an integer | `false` | [`Bool`](../../types/#bool) |
| `Default` |  | When specified, out of bounds or otherwise failed reads will returns this value instead of failing | `None` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`Int4`](../../types/#int4) |

</div>



--8<-- "includes/license.md"

