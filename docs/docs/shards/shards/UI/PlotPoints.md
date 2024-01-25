---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.PlotPoints

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||A sequence of point coordinates. | | [`[Float2]`](../../types/#seq) |
| `<output>` ||The output of this shard will be its input. | | [`[Float2]`](../../types/#seq) |
| `Name` |  | Name of this chart, displayed in the plot legend. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Color` |  | Stroke color. | `None` | [`Color`](../../types/#color)[`&Color`](../../types/#contextvar)[`None`](../../types/#none) |
| `Shape` |  | Shape of the marker. | `None` | [`MarkerShape`](../../../enums/MarkerShape) |
| `Radius` |  | Radius of the marker. | `None` | [`Float`](../../types/#float) |

</div>

Scattered points on a plot.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/PlotPoints/3.shs"
  ```

  ```
  --8<-- "samples/shards/UI/PlotPoints/3.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

