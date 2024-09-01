---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Insert

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value to prepend to the collection. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Index` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The collection to add the input to. | `None` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Collection` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The collection to add the input to. | `None` | [`Var([Any])`](../../types/#contextvar)[`Var(String)`](../../types/#contextvar)[`Var(Bytes)`](../../types/#contextvar) |

</div>

Prepends the input to the context variable passed to `Collection`.

--8<-- "includes/license.md"

