---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Set

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Input becomes the value of the variable being created. | | [`Any`](../../types/#any) |
| `<output>` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Name` |  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` |  | The key of the value to write in the table (parameter applicable only if the target variable is a table). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Global` |  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |
| `Exposed` |  | If the variable should be marked as exposed. | `false` | [`Bool`](../../types/#bool) |

</div>

Creates a mutable variable and assigns a value to it.

## Details

--8<-- "details/shards/General/Set.md"


--8<-- "includes/license.md"

