---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.FromFloat

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Floating point number. | | [`Float`](../../types/#float) |
| `Output ➡️` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `ShiftedBy` | :fontawesome-solid-circle-plus:{title="No"} No  | The shift is of the decimal point, i.e. of powers of ten, and is to the left if n is negative or to the right if n is positive. | `0` | [`Int`](../../types/#int) |

</div>

Converts a floating point number to a big integer.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/FromFloat/FromFloat.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/FromFloat/FromFloat.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

