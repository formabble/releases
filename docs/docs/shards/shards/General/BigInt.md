---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input value to convert to a big integer. | | [`Int`](../../types/#int)[`Float`](../../types/#float)[`String`](../../types/#string)[`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |

</div>

Converts various input types to a big integer represented as bytes. Big integers are signed and can be of arbitrary size. This allows for users to work with numbers that are too large to be represented by standard integer types.

--8<-- "includes/license.md"

