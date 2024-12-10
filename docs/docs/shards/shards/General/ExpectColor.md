---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ExpectColor

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Input of any type is accepted. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value unchanged if it is of type Color. | | [`Color`](../../types/#color) |

</div>

Checks the input value if it is vector of four color channels (RGBA). The shard outputs the input value unchanged if it is of the appropriate type; otherwise, the shard will trigger an error, preventing further execution.

--8<-- "includes/license.md"

