---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Abs

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Any valid integer(s), floating point number(s), or a sequence of such entities supported by this operation. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `<output>` ||The result of the operation, usually in the same type as the input value. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

Applies the unary operation on the input value and returns the result (or a sequence of results if the input and the operand are sequences).

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Abs/Abs.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Abs/Abs.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

