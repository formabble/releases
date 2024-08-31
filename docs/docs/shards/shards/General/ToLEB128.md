---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ToLEB128

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The integer to encode. | | [`Int`](../../types/#int) |
| `Output ➡️` ||Returns the LEB128 encoded byte sequence. | | [`Bytes`](../../types/#bytes) |
| `Signed` | :fontawesome-solid-circle-plus:{title="No"} No  | If the integer to encode/decode is signed and can be negative. | `false` | [`Bool`](../../types/#bool) |

</div>

This shard encodes the input(a signed or unsigned integer) into a LEB128 encoded byte sequence.

## Details

--8<-- "details/shards/General/ToLEB128.md"


--8<-- "includes/license.md"

