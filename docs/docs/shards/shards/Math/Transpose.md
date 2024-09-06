---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Transpose

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes a matrix (sequence of float2, float3, or float4 vectors) as input. | | [`[Float4](4)`](../../types/#seq)[`[Float3](3)`](../../types/#seq)[`[Float2](2)`](../../types/#seq) |
| `Output ➡️` ||Outputs the transposed the matrix. | | [`[Float4](4)`](../../types/#seq)[`[Float3](3)`](../../types/#seq)[`[Float2](2)`](../../types/#seq) |

</div>

Performs matrix transposition on the input matrix. Transposition flips the matrix over its main diagonal, switching its rows and columns. This shard supports 2x2, 3x3, and 4x4 as input matrices. A 4x4 matrix is a sequence with exactly 4 float4 vectors, a 3x3 matrix is a sequence with exactly 3 float3 vectors, and a 2x2 matrix is a sequence with exactly 2 float2 vectors.

--8<-- "includes/license.md"

