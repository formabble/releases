---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Count

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Any input is ignored. | | [`None`](../../types/#none) |
| `<output>` ||Count of characters, elements, or key-value pairs contained in the `:Name` parameter variable. | | [`Int`](../../types/#int) |
| `Name` |  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` |  | The key of the value to read from the table (parameter applicable only if the target variable is a table). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Global` |  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |

</div>

Parses the value in passed to in the `:Name` parameter and returns the count of characters (if string passed), elements (if sequence passed), or key-value pairs (if table passed).

## Details

--8<-- "details/shards/General/Count.md"


--8<-- "includes/license.md"

