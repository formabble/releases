---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ExpectInt8

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Input of any type is accepted. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Returns the input value unchanged if it is of type Int8. | | [`Int8`](../../types/#int8) |

</div>

Checks the input value if it is a vector with eight Int elements. The shard returns the input value unchanged if it is of the appropriate type; otherwise, the shard will trigger an error, preventing further execution.

--8<-- "includes/license.md"

