---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.Sqrt

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Outputs the square root of the input big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |

</div>

This shard computes the square root of the input big integer represented as bytes.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/Sqrt/Sqrt.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/Sqrt/Sqrt.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

