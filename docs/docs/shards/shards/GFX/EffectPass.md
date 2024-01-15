---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.EffectPass

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`GFX.PipelineStep`](../../types/#gfx.pipelinestep) |
| `Name` |  | A name for this step, to aid in debugging | `None` | [`None`](../../types/#none)[`String`](../../types/#string) |
| `Outputs` |  | The outputs to render into | `[{Name: color}]` | [`None`](../../types/#none)[`[{Any}]`](../../types/#seq)[`&[{Any}]`](../../types/#contextvar) |
| `OutputScale` |  | The scale that the output should be rendered as | `{main: None}` | [`None`](../../types/#none)[`Any`](../../types/#any) |
| `Inputs` |  |  | `None` | [`None`](../../types/#none)[`[String]`](../../types/#seq)[`&[String]`](../../types/#contextvar) |
| `EntryPoint` |  |  | `None` | [`None`](../../types/#none)[`[Shard]`](../../types/#seq)[`&[Shard]`](../../types/#contextvar) |
| `Params` |  | Shader parameters for this drawable | `None` | [`None`](../../types/#none)[`{GFX.Texture2D GFX.TextureCube [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4 &(GFX.Texture2D GFX.TextureCube [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4)}`](../../types/#table)[`&{GFX.Texture2D GFX.TextureCube [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4 &(GFX.Texture2D GFX.TextureCube [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4)}`](../../types/#contextvar) |
| `Features` |  | Features to attach to this drawable | `None` | [`None`](../../types/#none)[`[GFX.Feature]`](../../types/#seq)[`&[GFX.Feature]`](../../types/#contextvar) |
| `ComposeWith` |  | Any table of values that need to be injected into this feature's shaders | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |

</div>

--8<-- "includes/experimental.md"



--8<-- "includes/license.md"

