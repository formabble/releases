---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# BigInt.ToBytes

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Big integer represented as bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The resulting output of the shard | | [`Bytes`](../../types/#bytes) |
| `Bits` | :fontawesome-solid-circle-plus:{title="No"}  | The desired amount of bits for the output or 0 for automatic packing. | `0` | [`Int`](../../types/#int) |

</div>



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

