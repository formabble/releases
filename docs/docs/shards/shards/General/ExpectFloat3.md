---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ExpectFloat3

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Input of any type is accepted. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value unchanged if it is of type Float3. | | [`Float3`](../../types/#float3) |

</div>

Checks the input value if it is a vector with three Float elements. The shard outputs the input value unchanged if it is of the appropriate type; otherwise, the shard will trigger an error, preventing further execution.

--8<-- "includes/license.md"

