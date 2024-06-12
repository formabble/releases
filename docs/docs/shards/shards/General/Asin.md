---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Asin

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A floating point number, a vector of floats (Float2, Float3, Float4), a color, or a sequence of these types supported by this operation. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||The result of the operation, usually in the same type as the input value. If the input is a sequence, the output will be a sequence of results, with possible broadcasting according to the input and operand. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

Applies the unary operation on the input value and returns the result. If the input is a sequence, the operation is applied to each element of the sequence.

--8<-- "includes/license.md"

