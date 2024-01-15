---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Plot

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Contents shards of the plot. | | [`Any`](../../types/#any) |
| `<output>` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Contents` |  | The UI contents. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `ViewAspect` |  | Width / height ratio of the plot region. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `DataAspect` |  | Width / height ratio of the data. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `Legend` |  | Whether to display the legend. | `None` | [`Bool`](../../types/#bool)[`None`](../../types/#none) |

</div>

A 2D plot area.

--8<-- "includes/license.md"

