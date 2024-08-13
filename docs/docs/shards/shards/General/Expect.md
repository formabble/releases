---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Expect

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Input of any type is accepted. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input value unchanged if it matches the expected type. | | [`Any`](../../types/#any) |
| `Type` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The type to expect | `None` | [`Type`](../../types/#type) |
| `Unsafe` | :fontawesome-solid-circle-plus:{title="No"} No  | When set to true, it will skip type comparison. Generally unsafe but it can improve performance. Only set to true if you are certain that the input type matches the expected type. | `false` | [`Bool`](../../types/#bool) |

</div>

Checks if the input value matches the expected type specified by the 'Type' parameter. The shard returns the input value unchanged if it is of the appropriate type, the shard will trigger an error, preventing further execution. The 'Unsafe' parameter can be set to skip deep type hashing and comparison to improve performance.

--8<-- "includes/license.md"

