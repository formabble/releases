---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Dot

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes in a float vector of any dimension (e.g., float2, float3, float4). | | [`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq) |
| `Output ➡️` ||Returns the resulting dot product as a float value. | | [`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The operand. | `0` | [`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq)[`Var(Float2)`](../../types/#contextvar)[`Var([Float2])`](../../types/#contextvar)[`Var(Float3)`](../../types/#contextvar)[`Var([Float3])`](../../types/#contextvar)[`Var(Float4)`](../../types/#contextvar)[`Var([Float4])`](../../types/#contextvar) |

</div>

Computes the dot product of two float vectors with an equal number of elements, and returns the resulting float value. The first float vector is passed as input and the second float vector is specified in the Operand parameter.

--8<-- "includes/license.md"

