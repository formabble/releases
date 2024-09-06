---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Table

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Columns and Rows shards of the table. | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||The output of this shard will be its input. | | [`[Any]`](../../types/#seq) |
| `Builder` | :fontawesome-solid-circle-plus:{title="No"} No  | Sequence of shards to build each column, repeated for each row. | `[]` | [`[None Shard [Shard]]`](../../types/#seq) |
| `Columns` | :fontawesome-solid-circle-plus:{title="No"} No  | Configuration of the columns. | `none` | [`[{Any}]`](../../types/#seq)[`None`](../../types/#none) |
| `Striped` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether to alternate a subtle background color to every other row. | `none` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Resizable` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether columns can be resized within their specified range. | `none` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar)[`None`](../../types/#none) |
| `RowIndex` | :fontawesome-solid-circle-plus:{title="No"} No  | Variable to hold the row index, to be used within Rows. | `Var: Table.RowIndex` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Table layout.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Table/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Table/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Table/3.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Table/3.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Table/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Table/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

