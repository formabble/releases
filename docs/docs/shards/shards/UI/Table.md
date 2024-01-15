---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Table

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Columns and Rows shards of the table. | | [`[Any]`](../../types/#seq) |
| `<output>` ||The output of this shard will be its input. | | [`[Any]`](../../types/#seq) |
| `Builder` |  | Sequence of shards to build each column, repeated for each row. | `[]` | [`[None Shard [Shard]]`](../../types/#seq) |
| `Columns` |  | Configuration of the columns. | `None` | [`[{Any}]`](../../types/#seq)[`None`](../../types/#none) |
| `Striped` |  | Whether to alternate a subtle background color to every other row. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `Resizable` |  | Whether columns can be resized within their specified range. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `RowIndex` |  | Variable to hold the row index, to be used within Rows. | `ContextVariable: Table.RowIndex` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"

Table layout.

--8<-- "includes/license.md"

