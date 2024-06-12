---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Normalize

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any valid integer(s), floating point number(s), or a sequence of these types supported by this operation. | | [`[Float]`](../../types/#seq)[`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq) |
| `Output ➡️` ||The result of the operation, usually in the same type as the input value. If the input is a sequence, the output will be a sequence of results, with possible broadcasting according to the input and operand. | | [`[Float]`](../../types/#seq)[`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq) |
| `Positive` | :fontawesome-solid-circle-plus:{title="No"} No  | If the output should be in the range 0.0~1.0 instead of -1.0~1.0. | `false` | [`Bool`](../../types/#bool) |

</div>

Applies the unary operation on the input value and returns the result. If the input is a sequence, the operation is applied to each element of the sequence.

--8<-- "includes/license.md"

