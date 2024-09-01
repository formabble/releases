---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ExpectLike

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Input of any type is accepted. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Returns the input value unchanged if it matches the expected type. | | [`Any`](../../types/#any) |
| `TypeOf` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The type of the constant given here will be checked against this shard's input. | `None` | [`Any`](../../types/#any) |
| `OutputOf` | :fontawesome-solid-circle-plus:{title="No"} No  | Evaluates the output type of the given expression. That type of the output will be checked against this shard's input. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Unsafe` | :fontawesome-solid-circle-plus:{title="No"} No  | When set to true, it will skip type comparison. Generally unsafe but it can improve performance. Only set to true if you are certain that the input type matches the expected type. | `false` | [`Bool`](../../types/#bool) |

</div>

Checks if the input value matches the type of the value provided in the TypeOf parameter or the output type of the given expression in the OutputOf parameter. The shard returns the input value unchanged if it is of the appropriate type; otherwise, the shard will trigger an error, preventing further execution. Note that it can only compare with either one of the parameters, not both; an error will be thrown if both are provided. The 'Unsafe' parameter can be set to skip deep type hashing and comparison to improve performance.

--8<-- "includes/license.md"

