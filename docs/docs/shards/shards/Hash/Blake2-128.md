---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Hash.Blake2-128

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The string, bytes or a sequence of strings/bytes to hash. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq)[`String`](../../types/#string)[`[String]`](../../types/#seq) |
| `Output ➡️` ||Outputs the 128-bit hash as a byte array. | | [`Bytes`](../../types/#bytes) |

</div>

This shard outputs the compact 128-bit hash(of 16 bytes) of the input (string, bytes or a sequence of strings/bytes) using the BLAKE2b-128 hashing algorithm.

## Details

--8<-- "details/shards/Hash/Blake2-128.md"


--8<-- "includes/license.md"
