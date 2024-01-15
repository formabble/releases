---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Push

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Input is the update value to be pushed into the variables. | | [`Any`](../../types/#any) |
| `<output>` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Name` |  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` |  | The key of the value to write in the table (parameter applicable only if the target variable is a table). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Global` |  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |
| `Clear` |  | If we should clear this sequence at every wire iteration; works only if this is the first push; default: true. | `true` | [`Bool`](../../types/#bool) |

</div>

--8<-- "includes/experimental.md"

Updates sequences and tables by pushing elements and/or sequences into them.

--8<-- "includes/license.md"

