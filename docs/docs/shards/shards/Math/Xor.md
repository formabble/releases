---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Xor

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any valid integer(s) or a sequence of integers supported by this operation. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Color`](../../types/#color)[`[Any]`](../../types/#seq)[`Bool`](../../types/#bool) |
| `Output ➡️` ||The result of the operation, usually in the same type as the input value. If the input is a sequence, the output will be a sequence of results, with possible broadcasting according to the input and operand. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Color`](../../types/#color)[`[Any]`](../../types/#seq)[`Bool`](../../types/#bool) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The operand for this operation. | `0` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar)[`Int2`](../../types/#int2)[`&Int2`](../../types/#contextvar)[`Int3`](../../types/#int3)[`&Int3`](../../types/#contextvar)[`Int4`](../../types/#int4)[`&Int4`](../../types/#contextvar)[`Int8`](../../types/#int8)[`&Int8`](../../types/#contextvar)[`Int16`](../../types/#int16)[`&Int16`](../../types/#contextvar)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar)[`Float3`](../../types/#float3)[`&Float3`](../../types/#contextvar)[`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar)[`Color`](../../types/#color)[`&Color`](../../types/#contextvar)[`[Any]`](../../types/#seq)[`&[Any]`](../../types/#contextvar)[`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar) |

</div>

Applies the binary operation on the input value and the operand and returns the result (or a sequence of results if the input and the operand are sequences).

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Xor/Xor.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Xor/Xor.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

