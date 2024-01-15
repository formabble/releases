---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Subtract

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Any valid integer(s), floating point number(s), or a sequence of such entities supported by this operation. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `<output>` ||The result of the operation, usually in the same type as the input value. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Operand` |  | The operand for this operation. | `0` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar)[`Int2`](../../types/#int2)[`&Int2`](../../types/#contextvar)[`Int3`](../../types/#int3)[`&Int3`](../../types/#contextvar)[`Int4`](../../types/#int4)[`&Int4`](../../types/#contextvar)[`Int8`](../../types/#int8)[`&Int8`](../../types/#contextvar)[`Int16`](../../types/#int16)[`&Int16`](../../types/#contextvar)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar)[`Float3`](../../types/#float3)[`&Float3`](../../types/#contextvar)[`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar)[`Color`](../../types/#color)[`&Color`](../../types/#contextvar)[`[Any]`](../../types/#seq)[`&[Any]`](../../types/#contextvar) |

</div>

Applies the binary operation on the input value and the operand and returns the result (or a sequence of results if the input and the operand are sequences).

--8<-- "includes/license.md"

