---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Table

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The values that will be passed to the Columns and Rows shards of the table, or number of items in the sequence. | | [`Int`](../../types/#int)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Int`](../../types/#int)[`[Any]`](../../types/#seq) |
| `Columns` | :fontawesome-solid-circle-plus:{title="No"} No  | Column definitions with headers and content. | `none` | [`[Shard [Shard]]`](../../types/#seq) |
| `Striped` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether to alternate a subtle background color to every other row. | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `Resizable` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether columns can be resized within their specified range. | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `Reversed` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether the table is reversed. | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `IsSelected` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for checking if a row is currently selected. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Clicked` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for when a row is clicked. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `DoubleClicked` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for when a row is double-clicked. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `ContextMenu` | :fontawesome-solid-circle-plus:{title="No"} No  | Callback function for the right-click context menu on rows. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `RowHeight` | :fontawesome-solid-circle-plus:{title="No"} No  | Height of each row in pixels. Default is text height. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar)[`None`](../../types/#none) |

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

