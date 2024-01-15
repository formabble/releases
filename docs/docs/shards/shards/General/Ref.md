---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Ref

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Input becomes the value of the variable being created. | | [`Any`](../../types/#any) |
| `<output>` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Name` |  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` |  | The key of the value to read from the table (parameter applicable only if the target variable is a table). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Global` |  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |
| `Overwrite` |  | If the variable should be overwritten if it already exists. | `false` | [`Bool`](../../types/#bool) |

</div>

Creates an immutable variable with a constant value. Once created this variable cannot be changed.

--8<-- "includes/license.md"

