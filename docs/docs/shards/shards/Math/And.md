---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.And

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value or the sequence of values to compare the value specified in the Operand parameter with. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Color`](../../types/#color)[`[Any]`](../../types/#seq)[`Bool`](../../types/#bool) |
| `Output ➡️` ||This shard outputs the value resulting from the AND operation. | | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Color`](../../types/#color)[`[Any]`](../../types/#seq)[`Bool`](../../types/#bool) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The value or sequence of values to compare the input with. | `0` | [`Int`](../../types/#int)[`Int2`](../../types/#int2)[`Int3`](../../types/#int3)[`Int4`](../../types/#int4)[`Int8`](../../types/#int8)[`Int16`](../../types/#int16)[`Color`](../../types/#color)[`[Any]`](../../types/#seq)[`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |

</div>

This shard performs a bitwise AND operation on the input value with the value specified in the Operand parameter and outputs the result. A bitwise AND operation is a binary operation that compares each bit of the binary representations of two numbers and outputs 1 if the bits are 1 and 0 otherwise. The shard then outputs a value, whose binary representation is the concatenation of the resulting 1s and 0s from the AND comparison.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/And/And.shs"
  ```

  ```
  --8<-- "samples/shards/Math/And/And.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

