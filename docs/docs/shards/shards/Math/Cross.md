---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Cross

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Accepts float3 vector (a vector with 3 float elements) as input. | | [`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq) |
| `Output ➡️` ||Outputs the result of the cross product as a float3 vector or a sequence of float3 vectors if the input was a sequence of float3 vectors. | | [`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The float3 vector to compute the cross product with. | `0` | [`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq)[`Var(Float2)`](../../types/#contextvar)[`Var([Float2])`](../../types/#contextvar)[`Var(Float3)`](../../types/#contextvar)[`Var([Float3])`](../../types/#contextvar)[`Var(Float4)`](../../types/#contextvar)[`Var([Float4])`](../../types/#contextvar) |

</div>

This shard computes the cross product of the float3 vector (or sequence of float3 vectors) provided as input and the float3 vector provided in the Operand parameter and outputs the result as a float3 vector (or sequence of float3 vectors). A float3 vector is a vector with 3 float elements.

--8<-- "includes/license.md"

