---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.ToFloat

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The big integer to convert, represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Floating point number representation of the big integer value. | | [`Float`](../../types/#float) |
| `ShiftedBy` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of decimal places to shift the input big integer by. A positive number shifts the decimal point to the right, while a negative number shifts it to the left. | `0` | [`Int`](../../types/#int) |

</div>

This shard converts the input big integer value to a floating point number.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/ToFloat/ToFloat.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/ToFloat/ToFloat.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

