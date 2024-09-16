---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Subtract

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value or the sequence of values to subtract the value specified in the Operand parameter from. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||This shard outputs the result of the subtraction. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The value or sequence of values to subtract from the input. | `0` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar)[`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar)[`Int3`](../../types/#int3)[`Var(Int3)`](../../types/#contextvar)[`Int4`](../../types/#int4)[`Var(Int4)`](../../types/#contextvar)[`Int8`](../../types/#int8)[`Var(Int8)`](../../types/#contextvar)[`Int16`](../../types/#int16)[`Var(Int16)`](../../types/#contextvar)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar)[`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar)[`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar)[`[Any]`](../../types/#seq)[`Var([Any])`](../../types/#contextvar) |

</div>

This shard subtracts the value provided in the Operand parameter from the input value.

## Details

--8<-- "details/shards/Math/Subtract.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Subtract/Subtract.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Subtract/Subtract.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

