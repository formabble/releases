---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Hash.Keccak-512

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The string, bytes or a sequence of strings/bytes to hash. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq)[`String`](../../types/#string)[`[String]`](../../types/#seq) |
| `Output ➡️` ||Outputs the 512-bit hash as a byte sequence (outputs a sequence of bytes instead if the input was a sequence). | | [`Bytes`](../../types/#bytes) |

</div>

This shard outputs the 512-bit hash (64-bytes) of the input (string, bytes or a sequence of strings/bytes) using the Keccak-512 hashing algorithm.

## Details

--8<-- "details/shards/Hash/Keccak-512.md"


--8<-- "includes/license.md"

