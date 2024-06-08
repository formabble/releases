---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GetImagePixel

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Int2`](../../types/#int2) |
| `Output ➡️` ||The resulting output of the shard | | [`Int4`](../../types/#int4)[`Float4`](../../types/#float4) |
| `Position` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The position of the pixel to retrieve | `None` | [`Image`](../../types/#image)[`&Image`](../../types/#contextvar) |
| `AsInteger` | :fontawesome-solid-circle-plus:{title="No"} No  | Read the pixel as an integer | `false` | [`Bool`](../../types/#bool) |
| `Default` | :fontawesome-solid-circle-plus:{title="No"} No  | When specified, out of bounds or otherwise failed reads will returns this value instead of failing | `None` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`Int4`](../../types/#int4) |

</div>



--8<-- "includes/license.md"

