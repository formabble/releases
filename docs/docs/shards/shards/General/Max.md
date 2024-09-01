---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Max

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any valid integer(s), floating point number(s), or a sequence of these types supported by this operation. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||The result of the operation, usually in the same type as the input value. If the input is a sequence, the output will be a sequence of results, with possible broadcasting according to the input and operand. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The operand for this operation. | `0` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar)[`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar)[`Int3`](../../types/#int3)[`Var(Int3)`](../../types/#contextvar)[`Int4`](../../types/#int4)[`Var(Int4)`](../../types/#contextvar)[`Int8`](../../types/#int8)[`Var(Int8)`](../../types/#contextvar)[`Int16`](../../types/#int16)[`Var(Int16)`](../../types/#contextvar)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar)[`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar)[`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar)[`[Any]`](../../types/#seq)[`Var([Any])`](../../types/#contextvar) |

</div>

Applies the binary operation on the input value and the operand and returns the result (or a sequence of results if the input and the operand are sequences).

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Max/Max.shs"
  ```

  ```
  --8<-- "samples/shards/General/Max/Max.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

