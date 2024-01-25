---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Grid

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Contents shards of the grid. | | [`Any`](../../types/#any) |
| `<output>` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` |  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Striped` |  | Whether to alternate a subtle background color to every other row. | `false` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `NumColumns` |  | The number of columns in the grid. Setting this will allow the last column to expand to take up the rest of the space of the parent UI. | `None` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar)[`None`](../../types/#none) |
| `MinWidth` |  | Minimum column width. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `MaxWidth` |  | Maximum column width. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Spacing` |  | Spacing between columns/rows. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |

</div>

Simple grid layout.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Grid/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Grid/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

