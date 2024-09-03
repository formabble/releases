---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# FromLEB128

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The LEB128 encoded byte array to decode. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||Returns the decoded integer. | | [`Int`](../../types/#int) |
| `Signed` | :fontawesome-solid-circle-plus:{title="No"} No  | If the integer to encode/decode is signed and can be negative. | `false` | [`Bool`](../../types/#bool) |

</div>

This shard decodes the LEB128 encoded byte array and returns it as an integer (signed or unsigned depending on what was specified in the Signed parameter).

--8<-- "includes/license.md"

