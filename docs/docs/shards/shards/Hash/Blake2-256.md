---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Hash.Blake2-256

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The string, bytes or a sequence of strings/bytes to hash. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq)[`String`](../../types/#string)[`[String]`](../../types/#seq) |
| `Output ➡️` ||Returns the 256-bit hash as a byte sequence (returns a sequence of bytes instead if the input was a sequence). | | [`Bytes`](../../types/#bytes) |

</div>

This shard converts the input (string, bytes or a sequence of strings/bytes) into a 256-bit hash(of 32 bytes) using the BLAKE2b-256 hashing algorithm.

## Details

--8<-- "details/shards/Hash/Blake2-256.md"


--8<-- "includes/license.md"

