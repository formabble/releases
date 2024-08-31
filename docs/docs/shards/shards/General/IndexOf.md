---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# IndexOf

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The sequence to search through. | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||The index of the item or a sequence of indeces. | | [`[Int]`](../../types/#seq)[`Int`](../../types/#int) |
| `Item` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The item to find the index of from the input, if it's a sequence it will try to match all the items in the sequence, in sequence. | `None` | [`Any`](../../types/#any) |
| `All` | :fontawesome-solid-circle-plus:{title="No"} No  | If true will return a sequence with all the indices of Item, empty sequence if not found. | `false` | [`Bool`](../../types/#bool) |
| `Predicate` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Optional shards to use for more complex matching. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

This shard will search the input sequence for the index of an item or a pattern of items (specified in the Item parameter) and return its index(or a sequence of indices).

## Details

--8<-- "details/shards/General/IndexOf.md"


--8<-- "includes/license.md"

