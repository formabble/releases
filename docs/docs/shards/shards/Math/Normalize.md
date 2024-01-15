---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Normalize

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Any valid integer(s), floating point number(s), or a sequence of such entities supported by this operation. | | [`[Float]`](../../types/#seq)[`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq) |
| `<output>` ||The result of the operation, usually in the same type as the input value. | | [`[Float]`](../../types/#seq)[`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq) |
| `Positive` |  | If the output should be in the range 0.0~1.0 instead of -1.0~1.0. | `false` | [`Bool`](../../types/#bool) |

</div>

Applies the unary operation on the input value and returns the result (or a sequence of results if the input and the operand are sequences).

--8<-- "includes/license.md"

