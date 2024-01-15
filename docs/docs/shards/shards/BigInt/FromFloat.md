---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.FromFloat

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Floating point number. | | [`Float`](../../types/#float) |
| `<output>` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `ShiftedBy` |  | The shift is of the decimal point, i.e. of powers of ten, and is to the left if n is negative or to the right if n is positive. | `0` | [`Int`](../../types/#int) |

</div>

--8<-- "includes/experimental.md"

Converts a floating point number to a big integer.

--8<-- "includes/license.md"

