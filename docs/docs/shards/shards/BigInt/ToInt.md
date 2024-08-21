---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.ToInt

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The big integer to convert, represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Integer representation of the big integer value. | | [`Int`](../../types/#int) |

</div>

This shard converts the input big integer value to an integer.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/ToInt/ToInt.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/ToInt/ToInt.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

