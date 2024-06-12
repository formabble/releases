---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ExpectLike

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input value. This shard checks if the input value matches the type of the specified example value or the output type of the given expression. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input value if it matches the expected type. | | [`Any`](../../types/#any) |
| `TypeOf` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The example value to expect. The type of the constant given here will be checked against this shard's input. | `None` | [`Any`](../../types/#any) |
| `OutputOf` | :fontawesome-solid-circle-plus:{title="No"} No  | Evaluates the output type of the given expression. That type will be checked against this shard's input. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Unsafe` | :fontawesome-solid-circle-plus:{title="No"} No  | If we should skip performing deep type hashing and comparison. (generally fast but this might improve performance) | `false` | [`Bool`](../../types/#bool) |

</div>

Checks if the input value matches the type of the specified example value given by the 'TypeOf' parameter or the output type of the given expression in the 'OutputOf' parameter. If both 'TypeOf' and 'OutputOf' are provided, an error is thrown. If neither is provided, an error is thrown. The 'Unsafe' parameter can be set to skip deep type hashing and comparison to improve performance.

--8<-- "includes/license.md"

