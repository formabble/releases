---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ExpectLike

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `TypeOf` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The example value to expect. The type of the constant given here will be checked against this shard's input. | `None` | [`Any`](../../types/#any) |
| `OutputOf` | :fontawesome-solid-circle-plus:{title="No"} No  | Evaluates the output type of the given expression. That type will be checked against this shard's input. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Unsafe` | :fontawesome-solid-circle-plus:{title="No"} No  | If we should skip performing deep type hashing and comparison. (generally fast but this might improve performance) | `false` | [`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

