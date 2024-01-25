---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.AutoGrid

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`[Any]`](../../types/#seq) |
| `<output>` || | | [`[Any]`](../../types/#seq) |
| `Contents` |  | The UI contents to be generated and inserted in each column for each element in the given sequence. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Striped` |  | Whether to alternate a subtle background color to every other row. | `false` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `MaxGridWidth` |  | Maximum grid width. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ItemWidth` |  | The width of each item. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ColumnSpacing` |  | Spacing between columns. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `RowSpacing` |  | Spacing between rows. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |

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

