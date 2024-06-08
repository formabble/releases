---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# IndexOf

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||The resulting output of the shard | | [`[Int]`](../../types/#seq)[`Int`](../../types/#int) |
| `Item` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The item to find the index of from the input, if it's a sequence it will try to match all the items in the sequence, in sequence. | `None` | [`Any`](../../types/#any) |
| `All` | :fontawesome-solid-circle-plus:{title="No"}  | If true will return a sequence with all the indices of Item, empty sequence if not found. | `false` | [`Bool`](../../types/#bool) |
| `Predicate` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The shards to use as predicate. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>



--8<-- "includes/license.md"

