---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.PlotPoints

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A sequence of point coordinates. | | [`[Float2]`](../../types/#seq) |
| `Output ➡️` ||The output of this shard will be its input. | | [`[Float2]`](../../types/#seq) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | Name of this chart, displayed in the plot legend. | `none` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Color` | :fontawesome-solid-circle-plus:{title="No"} No  | Stroke color. | `none` | [`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Shape` | :fontawesome-solid-circle-plus:{title="No"} No  | Shape of the marker. | `none` | [`MarkerShape`](../../../enums/MarkerShape) |
| `Radius` | :fontawesome-solid-circle-plus:{title="No"} No  | Radius of the marker. | `none` | [`Float`](../../types/#float) |

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

