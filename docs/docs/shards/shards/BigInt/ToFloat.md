---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.ToFloat

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Floating point number representation of the big integer value. | | [`Float`](../../types/#float) |
| `ShiftedBy` | :fontawesome-solid-circle-plus:{title="No"} No  | The shift is of the decimal point, i.e. of powers of ten, and is to the left if n is negative or to the right if n is positive. | `0` | [`Int`](../../types/#int) |

</div>

Converts a big integer value to a floating point number.

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

