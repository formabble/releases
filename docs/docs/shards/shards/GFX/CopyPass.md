---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.CopyPass

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The render pass object for use in a render pipeline. | | [`GFX.PipelineStep`](../../types/#gfx.pipelinestep) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | A name for this pass, to aid in debugging | `none` | [`None`](../../types/#none)[`String`](../../types/#string) |
| `Outputs` | :fontawesome-solid-circle-plus:{title="No"} No  | The outputs to render into | `none` | [`None`](../../types/#none)[`[{Any}]`](../../types/#seq)[`Var([{Any}])`](../../types/#contextvar) |
| `OutputScale` | :fontawesome-solid-circle-plus:{title="No"} No  | The scale that the output should be rendered as | `{main: none}` | [`None`](../../types/#none)[`Any`](../../types/#any) |
| `Inputs` | :fontawesome-solid-circle-plus:{title="No"} No  | The names of the render pass objects to modify as a sequence of strings. | `none` | [`None`](../../types/#none)[`[String]`](../../types/#seq)[`Var([String])`](../../types/#contextvar) |

</div>

This shard creates a render pass object that is meant for transferring render data from one stage of the render pipeline to the next. It is also able to make changes to the render data specified in the Inputs parameter, like changing its texture format or down sampling the texture. It makes these changes through its Outputs and OutputScale parameters.

## Details

--8<-- "details/shards/GFX/CopyPass.md"


--8<-- "includes/license.md"

