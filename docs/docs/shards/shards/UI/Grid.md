---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Grid

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Contents shards of the grid. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` | :fontawesome-solid-circle-plus:{title="No"} No  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Striped` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether to alternate a subtle background color to every other row. | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar)[`None`](../../types/#none) |
| `NumColumns` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of columns in the grid. Setting this will allow the last column to expand to take up the rest of the space of the parent UI. | `None` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar)[`None`](../../types/#none) |
| `MinWidth` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Minimum column width. | `None` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `MaxWidth` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Maximum column width. | `None` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Spacing` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Spacing between columns/rows. | `None` | [`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |

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

