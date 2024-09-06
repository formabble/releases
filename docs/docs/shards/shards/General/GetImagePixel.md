---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GetImagePixel

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The position of the pixel to obtain the colour value of, represented as an int2 vector. The first element of the vector represents the x coordinate, and the second element represents the y coordinate. | | [`Int2`](../../types/#int2) |
| `Output ➡️` ||The colour(RGBA) values of the pixel at the specified position as a int4 or float4 vector. The first element of the vector represents the red value, the second element represents the green value, the third element represents the blue value, and the fourth element represents the alpha value. | | [`Int4`](../../types/#int4)[`Float4`](../../types/#float4) |
| `Position` | :fontawesome-solid-circle-plus:{title="No"} No  | The position of the pixel to retrieve | `none` | [`Image`](../../types/#image)[`Var(Image)`](../../types/#contextvar) |
| `AsInteger` | :fontawesome-solid-circle-plus:{title="No"} No  | Read the pixel as an integer | `false` | [`Bool`](../../types/#bool) |
| `Default` | :fontawesome-solid-circle-plus:{title="No"} No  | When specified, out of bounds or otherwise failed reads will outputs this value instead of failing | `none` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`Int4`](../../types/#int4) |

</div>

This shard analyzes the image(specified in the Image parameter) and outputs the colour value(RGBA) of the pixel at the specified position.

--8<-- "includes/license.md"

