---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.MatMul

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes a matrix as input. (2x2, 3x3 or 4x4) | | [`[Float4]`](../../types/#seq)[`[Float3]`](../../types/#seq)[`[Float2]`](../../types/#seq) |
| `Output ➡️` ||Returns the result of the matrix multiplication. If a matrix is multiplied by a vector, the result is a vector (depending on the dimensions of the matrix provided). If two matrices are multiplied, the result is a matrix with the same dimensions as the input matrix. | | [`[Float4]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float3]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float2]`](../../types/#seq)[`Float2`](../../types/#float2) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The operand for this operation. | `0` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar)[`Int2`](../../types/#int2)[`&Int2`](../../types/#contextvar)[`Int3`](../../types/#int3)[`&Int3`](../../types/#contextvar)[`Int4`](../../types/#int4)[`&Int4`](../../types/#contextvar)[`Int8`](../../types/#int8)[`&Int8`](../../types/#contextvar)[`Int16`](../../types/#int16)[`&Int16`](../../types/#contextvar)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar)[`Float3`](../../types/#float3)[`&Float3`](../../types/#contextvar)[`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar)[`Color`](../../types/#color)[`&Color`](../../types/#contextvar)[`[Any]`](../../types/#seq)[`&[Any]`](../../types/#contextvar) |

</div>

Performs matrix multiplication on either two matrices or a matrix and a vector and returns either a matrix or a vector accordingly. The two matrixes must be of similar dimensions (2x2, 3x3, or 4x4). And if multiplied with a vector, the vector too must have similar dimensions (2x2 with float2, 3x3 with float3, 4x4 with float4).

--8<-- "includes/license.md"

