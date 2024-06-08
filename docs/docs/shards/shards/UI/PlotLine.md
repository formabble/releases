---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.PlotLine

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A sequence of point coordinates. | | [`[Float2]`](../../types/#seq) |
| `Output ➡️` ||The output of this shard will be its input. | | [`[Float2]`](../../types/#seq) |
| `Color` | :fontawesome-solid-circle-plus:{title="No"} No  | Stroke color. | `None` | [`Color`](../../types/#color)[`&Color`](../../types/#contextvar)[`None`](../../types/#none) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | Name of this chart, displayed in the plot legend. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |

</div>

Line-connected points on a plot.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/PlotLine/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/PlotLine/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

