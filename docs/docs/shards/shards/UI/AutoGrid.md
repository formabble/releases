---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.AutoGrid

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||The resulting output of the shard | | [`[Any]`](../../types/#seq) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents to be generated and inserted in each column for each element in the given sequence. | `none` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Striped` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether to alternate a subtle background color to every other row. | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar)[`None`](../../types/#none) |
| `MaxGridWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum grid width. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ItemWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | The width of each item. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ColumnSpacing` | :fontawesome-solid-circle-plus:{title="No"} No  | Spacing between columns. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `RowSpacing` | :fontawesome-solid-circle-plus:{title="No"} No  | Spacing between rows. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `MaxTileHeight` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum height of each tile for viewport culling. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |

</div>

Works like UI.Grid, but given a Sequence, it will, it each object in the Sequence, execute the Shard provided in its Contents and automatically wrap the generated contents when it exceeds the grid's width.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/AutoGrid/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/AutoGrid/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/AutoGrid/3.shs"
  ```

  ```
  --8<-- "samples/shards/UI/AutoGrid/3.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/AutoGrid/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/AutoGrid/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

