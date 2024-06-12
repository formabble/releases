---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Cross

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any valid integer(s), floating point number(s), or a sequence of these types supported by this operation. | | [`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq) |
| `Output ➡️` ||The result of the operation, usually in the same type as the input value. If the input is a sequence, the output will be a sequence of results, with possible broadcasting according to the input and operand. | | [`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The operand. | `0` | [`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq)[`&Float2`](../../types/#contextvar)[`&[Float2]`](../../types/#contextvar)[`&Float3`](../../types/#contextvar)[`&[Float3]`](../../types/#contextvar)[`&Float4`](../../types/#contextvar)[`&[Float4]`](../../types/#contextvar) |

</div>

Applies the binary operation on the input value and the operand and returns the result (or a sequence of results if the input and the operand are sequences).

--8<-- "includes/license.md"

