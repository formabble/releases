---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.DrawablePass

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The render pass object for use in a render pipeline. | | [`GFX.PipelineStep`](../../types/#gfx.pipelinestep) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | A name for this pass, to aid in debugging | `None` | [`None`](../../types/#none)[`String`](../../types/#string) |
| `Queue` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The drawables queue to get drawables from. | `None` | [`Var(GFX.DrawQueue)`](../../types/#contextvar) |
| `Features` | :fontawesome-solid-circle-plus:{title="No"} No  | Features to attach to this drawable | `None` | [`None`](../../types/#none)[`[GFX.Feature]`](../../types/#seq)[`Var([GFX.Feature])`](../../types/#contextvar) |
| `Outputs` | :fontawesome-solid-circle-plus:{title="No"} No  | The outputs to render into | `None` | [`None`](../../types/#none)[`[{Any}]`](../../types/#seq)[`Var([{Any}])`](../../types/#contextvar) |
| `OutputScale` | :fontawesome-solid-circle-plus:{title="No"} No  | The scale that the output should be rendered as | `{main: None}` | [`None`](../../types/#none)[`Any`](../../types/#any) |
| `Sort` | :fontawesome-solid-circle-plus:{title="No"} No  | The sorting mode to use to sort the drawables. The default sorting behavior is to sort by optimal batching. | `None` | [`None`](../../types/#none)[`SortMode`](../../../enums/SortMode)[`Var(SortMode)`](../../types/#contextvar) |
| `IgnoreDrawableFeatures` | :fontawesome-solid-circle-plus:{title="No"} No  | Ignore any features on drawables and only use the features specified in this pass. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>

This shard creates a render pass object, meant for rendering drawable objects, using the drawables from the drawables queue (specified in the Queue parameter) and the sequence of features objects (specified in the Features parameter).

--8<-- "includes/license.md"

