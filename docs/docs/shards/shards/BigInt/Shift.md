---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.Shift

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `By` | :fontawesome-solid-circle-plus:{title="No"}  | The shift is of the decimal point, i.e. of powers of ten, and is to the left if n is negative or to the right if n is positive. | `0` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar) |

</div>



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

