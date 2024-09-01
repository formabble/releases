---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.ToBytes

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Big integer to convert, represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The resulting output of the shard | | [`Bytes`](../../types/#bytes) |
| `Bits` | :fontawesome-solid-circle-plus:{title="No"} No  | The desired bit length for the output to take. If set to 0, the output will be the minimum number of bytes required to represent the big integer. | `0` | [`Int`](../../types/#int) |

</div>

This shard converts a big integer value into a bytes representaion with the specified bit length set in the Bits parameter. If set to 0, the output will be the minimum number of bytes required to represent the big integer. If set to a positive number, the output will be padded with leading zeros to match the specified bit length. An error is thrown if the number requires more bits than specified.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/BigInt/ToBytes/ToBytes.shs"
  ```

  ```
  --8<-- "samples/shards/BigInt/ToBytes/ToBytes.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

