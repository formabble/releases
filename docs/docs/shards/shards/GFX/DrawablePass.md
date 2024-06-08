---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.DrawablePass

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`GFX.PipelineStep`](../../types/#gfx.pipelinestep) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"}  | A name for this step, to aid in debugging | `None` | [`None`](../../types/#none)[`String`](../../types/#string) |
| `Queue` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The queue that this pass should render | `None` | [`&GFX.DrawQueue`](../../types/#contextvar) |
| `Features` | :fontawesome-solid-circle-plus:{title="No"}  | Features to attach to this drawable | `None` | [`None`](../../types/#none)[`[GFX.Feature]`](../../types/#seq)[`&[GFX.Feature]`](../../types/#contextvar) |
| `Outputs` | :fontawesome-solid-circle-plus:{title="No"}  | The outputs to render into | `None` | [`None`](../../types/#none)[`[{Any}]`](../../types/#seq)[`&[{Any}]`](../../types/#contextvar) |
| `OutputScale` | :fontawesome-solid-circle-plus:{title="No"}  | The scale that the output should be rendered as | `{main: None}` | [`None`](../../types/#none)[`Any`](../../types/#any) |
| `Sort` | :fontawesome-solid-circle-plus:{title="No"}  | The sorting mode to use to sort the drawables. The default sorting behavior is to sort by optimal batching | `None` | [`None`](../../types/#none)[`SortMode`](../../../enums/SortMode)[`&SortMode`](../../types/#contextvar) |
| `IgnoreDrawableFeatures` | :fontawesome-solid-circle-plus:{title="No"}  | Ignore any features on drawables and only use the features specified in this pass | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>



## Details

--8<-- "details/shards/GFX/DrawablePass.md"


--8<-- "includes/license.md"

