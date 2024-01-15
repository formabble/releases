---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Erase

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Any input is ignored. | | [`Any`](../../types/#any) |
| `<output>` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Indices` |  | One or multiple indices to filter from a sequence. | `None` | [`Any`](../../types/#any)[`&Any`](../../types/#contextvar) |
| `Name` |  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` |  | The key of the value to erase from the table (this variable will become a table). | `None` | [`Any`](../../types/#any) |
| `Global` |  | If the variable is or should be available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |

</div>

--8<-- "includes/experimental.md"

Deletes an index or indices from a sequence or a key or keys from a table.

--8<-- "includes/license.md"

