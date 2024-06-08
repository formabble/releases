---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.ToHex

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Int`](../../types/#int)[`Bytes`](../../types/#bytes)[`String`](../../types/#string) |
| `Output ➡️` ||Hexadecimal representation of the integer value. | | [`String`](../../types/#string) |

</div>

Converts the value to a hexadecimal representation.

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

