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
| `Name` | :fontawesome-solid-circle-plus:{title="No"}  | Name of this chart, displayed in the plot legend. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Color` | :fontawesome-solid-circle-plus:{title="No"}  | Stroke color. | `None` | [`Color`](../../types/#color)[`&Color`](../../types/#contextvar)[`None`](../../types/#none) |
| `Shape` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Shape of the marker. | `None` | [`MarkerShape`](../../../enums/MarkerShape) |
| `Radius` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Radius of the marker. | `None` | [`Float`](../../types/#float) |

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

