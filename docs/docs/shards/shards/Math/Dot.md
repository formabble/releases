---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Dot

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Any valid integer(s), floating point number(s), or a sequence of such entities supported by this operation. | | [`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq) |
| `<output>` ||The result of the operation, usually in the same type as the input value. | | [`Float`](../../types/#float) |
| `Operand` |  | The operand. | `0` | [`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq)[`&Float2`](../../types/#contextvar)[`&[Float2]`](../../types/#contextvar)[`&Float3`](../../types/#contextvar)[`&[Float3]`](../../types/#contextvar)[`&Float4`](../../types/#contextvar)[`&[Float4]`](../../types/#contextvar) |

</div>

Applies the binary operation on the input value and the operand and returns the result (or a sequence of results if the input and the operand are sequences).

--8<-- "includes/license.md"

