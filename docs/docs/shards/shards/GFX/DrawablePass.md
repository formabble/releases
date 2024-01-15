---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.DrawablePass

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`GFX.PipelineStep`](../../types/#gfx.pipelinestep) |
| `Name` |  | A name for this step, to aid in debugging | `None` | [`None`](../../types/#none)[`String`](../../types/#string) |
| `Queue` |  | The queue that this pass should render | `None` | [`&GFX.DrawQueue`](../../types/#contextvar) |
| `Features` |  | Features to attach to this drawable | `None` | [`None`](../../types/#none)[`[GFX.Feature]`](../../types/#seq)[`&[GFX.Feature]`](../../types/#contextvar) |
| `Outputs` |  | The outputs to render into | `None` | [`None`](../../types/#none)[`[{Any}]`](../../types/#seq)[`&[{Any}]`](../../types/#contextvar) |
| `OutputScale` |  | The scale that the output should be rendered as | `{main: None}` | [`None`](../../types/#none)[`Any`](../../types/#any) |
| `Sort` |  | The sorting mode to use to sort the drawables. The default sorting behavior is to sort by optimal batching | `None` | [`None`](../../types/#none)[`SortMode`](../../../enums/SortMode)[`&SortMode`](../../types/#contextvar) |
| `IgnoreDrawableFeatures` |  | Ignore any features on drawables and only use the features specified in this pass | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>

--8<-- "includes/experimental.md"



--8<-- "includes/license.md"

