---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.Shift

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Returns the big integer with its decimal point shifted represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `By` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of decimal places to shift the input big integer by. A positive number shifts the decimal point to the right, while a negative number shifts it to the left. | `0` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |

</div>

This shard shifts the decimal point of the input big integer by the amount specified in the By parameter.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/Shift/Shift.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/Shift/Shift.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

