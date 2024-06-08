---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.EffectPass

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`GFX.PipelineStep`](../../types/#gfx.pipelinestep) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | A name for this step, to aid in debugging | `None` | [`None`](../../types/#none)[`String`](../../types/#string) |
| `Outputs` | :fontawesome-solid-circle-plus:{title="No"} No  | The outputs to render into | `[{Name: color}]` | [`None`](../../types/#none)[`[{Any}]`](../../types/#seq)[`&[{Any}]`](../../types/#contextvar) |
| `OutputScale` | :fontawesome-solid-circle-plus:{title="No"} No  | The scale that the output should be rendered as | `{main: None}` | [`None`](../../types/#none)[`Any`](../../types/#any) |
| `Inputs` | :fontawesome-solid-circle-plus:{title="No"} No  |  | `None` | [`None`](../../types/#none)[`[String]`](../../types/#seq)[`&[String]`](../../types/#contextvar) |
| `EntryPoint` | :fontawesome-solid-circle-plus:{title="No"} No  |  | `None` | [`None`](../../types/#none)[`[Shard]`](../../types/#seq)[`&[Shard]`](../../types/#contextvar) |
| `Params` | :fontawesome-solid-circle-plus:{title="No"} No  | Shader parameters for this drawable | `None` | [`None`](../../types/#none)[`{GFX.Texture2D GFX.TextureCube &GFX.Buffer [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4 &(GFX.Texture2D GFX.TextureCube &GFX.Buffer [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4)}`](../../types/#table)[`&{GFX.Texture2D GFX.TextureCube &GFX.Buffer [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4 &(GFX.Texture2D GFX.TextureCube &GFX.Buffer [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4)}`](../../types/#contextvar) |
| `Features` | :fontawesome-solid-circle-plus:{title="No"} No  | Features to attach to this drawable | `None` | [`None`](../../types/#none)[`[GFX.Feature]`](../../types/#seq)[`&[GFX.Feature]`](../../types/#contextvar) |
| `ComposeWith` | :fontawesome-solid-circle-plus:{title="No"} No  | Any table of values that need to be injected into this feature's shaders | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |

</div>



--8<-- "includes/license.md"

