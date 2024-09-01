---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.ToHex

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Big integer to convert, represented as bytes. | | [`Int`](../../types/#int)[`Bytes`](../../types/#bytes)[`String`](../../types/#string) |
| `Output ➡️` ||Returns the hexadecimal representation of the input big integer value. | | [`String`](../../types/#string) |

</div>

This shard converts the input big integer value to its hexadecimal representation.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/ToHex/ToHex.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/ToHex/ToHex.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

