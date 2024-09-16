---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.LShift

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The integer or the sequence of integers to shift the bits of. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the value resulting from the left shift operation. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of positions to shift the bits of the input value to the left by. | `0` | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard shifts the bits of the input value to the left by the number of positions specified in the Operand parameter. The shard then outputs a value, whose binary representation is the resulting shifted binary.

## Details

--8<-- "details/shards/Math/LShift.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/LShift/LShift.shs"
  ```

  ```
  --8<-- "samples/shards/Math/LShift/LShift.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

