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
| `Index` | :fontawesome-solid-circle-plus:{title="No"} No  | The collection to add the input to. | `none` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Collection` | :fontawesome-solid-circle-plus:{title="No"} No  | The collection to add the input to. | `none` | [`Var([Any])`](../../types/#contextvar)[`Var(String)`](../../types/#contextvar)[`Var(Bytes)`](../../types/#contextvar) |

</div>

Prepends the input to the context variable passed to `Collection`.

--8<-- "includes/license.md"

