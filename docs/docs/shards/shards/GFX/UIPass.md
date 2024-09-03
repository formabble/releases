---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.UIPass

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The render pass object. | | [`GFX.PipelineStep`](../../types/#gfx.pipelinestep) |
| `Queue` | :fontawesome-solid-circle-plus:{title="No"} No  | The drawables queue to get the UI drawable objects from. | `None` | [`None`](../../types/#none)[`Var(GFX.DrawQueue)`](../../types/#contextvar) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | A name for this pass, to aid in debugging | `None` | [`None`](../../types/#none)[`String`](../../types/#string) |

</div>

This shard creates a render pass object designed for rendering UI using the UI drawable objects from the drawables queue specified in the Queue parameter.

--8<-- "includes/license.md"

