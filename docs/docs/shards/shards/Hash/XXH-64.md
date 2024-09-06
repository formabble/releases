---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Hash.XXH-64

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The string, bytes or a sequence of strings/bytes to hash. | | [`Bytes`](../../types/#bytes)[`[Bytes]`](../../types/#seq)[`String`](../../types/#string)[`[String]`](../../types/#seq) |
| `Output ➡️` ||Outputs the 64-bit hash as a byte array. | | [`Bytes`](../../types/#bytes) |

</div>

This shard outputs the 64-bit hash(of 8 bytes) of the input (string, bytes or a sequence of strings/bytes) using the XXH64 hashing algorithm.

## Details

--8<-- "details/shards/Hash/XXH-64.md"


--8<-- "includes/license.md"

