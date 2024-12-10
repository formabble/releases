---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.MatMul

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes a matrix as input. (2x2, 3x3 or 4x4) | | [`[Float4](4)`](../../types/#seq)[`[Float3](3)`](../../types/#seq)[`[Float2](2)`](../../types/#seq) |
| `Output ➡️` ||Outputs the result of the matrix multiplication. If a matrix is multiplied by a vector, the result is a vector (depending on the dimensions of the matrix provided). If two matrices are multiplied, the result is a matrix with the same dimensions as the input matrix. | | [`[Float4](4)`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float3](3)`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float2](2)`](../../types/#seq)[`Float2`](../../types/#float2) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The operand for this operation. | `0` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar)[`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar)[`Int3`](../../types/#int3)[`Var(Int3)`](../../types/#contextvar)[`Int4`](../../types/#int4)[`Var(Int4)`](../../types/#contextvar)[`Int8`](../../types/#int8)[`Var(Int8)`](../../types/#contextvar)[`Int16`](../../types/#int16)[`Var(Int16)`](../../types/#contextvar)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar)[`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar)[`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar)[`[Any]`](../../types/#seq)[`Var([Any])`](../../types/#contextvar) |

</div>

Performs matrix multiplication on either two matrices or a matrix and a vector and outputs either a matrix or a vector accordingly. The two matrixes must be of similar dimensions (2x2, 3x3, or 4x4). And if multiplied with a vector, the vector too must have similar dimensions (2x2 with float2, 3x3 with float3, 4x4 with float4).

--8<-- "includes/license.md"

