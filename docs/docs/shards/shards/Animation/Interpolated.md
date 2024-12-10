---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Animation.Interpolated

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value to interpolate. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4) |
| `Output ➡️` ||The interpolated value. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4) |
| `Duration` | :fontawesome-solid-circle-plus:{title="No"} No  | Duration of interpolation | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |

</div>

Whenever the input value is changed, this shard will interpolate between the old value and the new value over the duration of the animation and output the result.

--8<-- "includes/license.md"

