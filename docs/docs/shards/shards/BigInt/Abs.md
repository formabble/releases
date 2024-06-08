---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.Abs

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |

</div>

Computes the absolute value of a big integer.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/Abs/Abs.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/Abs/Abs.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

