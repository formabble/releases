---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ExpectInt4Seq

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||This shard accepts a sequence of values. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Returns the input value unchanged if it is a sequence of Int4 vectors. | | [`[Int4]`](../../types/#seq) |
| `Unsafe` | :fontawesome-solid-circle-plus:{title="No"} No  | When set to true, it will skip type comparison. Generally unsafe but it can improve performance. Only set to true if you are certain that the input type matches the expected type. | `false` | [`Bool`](../../types/#bool) |

</div>

Checks if the input value is a sequence of Int4 vectors. The shard returns the input value unchanged if it is of the appropriate type; otherwise, the shard will trigger an error, preventing further execution.

--8<-- "includes/license.md"

