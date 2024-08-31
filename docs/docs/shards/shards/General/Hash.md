---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Hash

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Input of any type is accepted. | | [`Any`](../../types/#any) |
| `Output ➡️` ||This shard returns the input's hashed value as an int2 (a sequence with 2 integers as elements) with 64-bit integer elements. | | [`Int2`](../../types/#int2) |

</div>

This shard takes any input type, hashes them using the XXH128 hashing algorithm and returns their 128-bit hash value as an int2 (a sequence with 2 integers as elements).

--8<-- "includes/license.md"

