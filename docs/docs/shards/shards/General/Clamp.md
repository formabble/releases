---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Clamp

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value to clamp. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color) |
| `Output ➡️` ||The clamped value. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color) |
| `Min` | :fontawesome-solid-circle-plus:{title="No"} No  | The lower bound of the range | `none` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar)[`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar)[`Int3`](../../types/#int3)[`Var(Int3)`](../../types/#contextvar)[`Int4`](../../types/#int4)[`Var(Int4)`](../../types/#contextvar)[`Int8`](../../types/#int8)[`Var(Int8)`](../../types/#contextvar)[`Int16`](../../types/#int16)[`Var(Int16)`](../../types/#contextvar)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar)[`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar)[`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar)[`[Any]`](../../types/#seq)[`Var([Any])`](../../types/#contextvar) |
| `Max` | :fontawesome-solid-circle-plus:{title="No"} No  | The upper bound of the range | `none` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar)[`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar)[`Int3`](../../types/#int3)[`Var(Int3)`](../../types/#contextvar)[`Int4`](../../types/#int4)[`Var(Int4)`](../../types/#contextvar)[`Int8`](../../types/#int8)[`Var(Int8)`](../../types/#contextvar)[`Int16`](../../types/#int16)[`Var(Int16)`](../../types/#contextvar)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar)[`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar)[`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar)[`[Any]`](../../types/#seq)[`Var([Any])`](../../types/#contextvar) |

</div>

This shard ensures the input value falls within the specified range. If the value falls below the minimum, the Min value is returned. If the value exceeds the maximum, the Max value is returned. Otherwise, the value is returned unchanged.

## Details

--8<-- "details/shards/General/Clamp.md"


--8<-- "includes/license.md"

