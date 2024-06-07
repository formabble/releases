---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Insert

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value to prepend to the collection. | | [`Any`](../../types/#any) |
| `<output>` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Index` |  | The collection to add the input to. | `None` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar) |
| `Collection` |  | The collection to add the input to. | `None` | [`&[Any]`](../../types/#contextvar)[`&String`](../../types/#contextvar)[`&Bytes`](../../types/#contextvar) |

</div>

Prepends the input to the context variable passed to `Collection`.

--8<-- "includes/license.md"
