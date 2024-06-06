---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# IndexOf

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`[Any]`](../../types/#seq) |
| `<output>` || | | [`[Int]`](../../types/#seq)[`Int`](../../types/#int) |
| `Item` |  | The item to find the index of from the input, if it's a sequence it will try to match all the items in the sequence, in sequence. | `None` | [`Any`](../../types/#any) |
| `All` |  | If true will return a sequence with all the indices of Item, empty sequence if not found. | `false` | [`Bool`](../../types/#bool) |
| `Predicate` |  | The shards to use as predicate. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>



--8<-- "includes/license.md"

