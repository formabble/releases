---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.Feature

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`GFX.Feature`](../../types/#gfx.feature) |
| `Shaders` |  | A list of shader entry points | `None` | [`None`](../../types/#none)[`[{Any}]`](../../types/#seq) |
| `ComposeWith` |  | Any table of values that need to be injected into this feature's shaders | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |
| `State` |  | The table of render state flags to override | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |
| `ViewGenerators` |  | A collection of callbacks that will be run to generate per-view shader parameters during rendering | `None` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Wire]`](../../types/#seq)[`[Shard]`](../../types/#seq)[`[[Shard]]`](../../types/#seq)[`None`](../../types/#none) |
| `DrawableGenerators` |  | A collection of callbacks that will be run to generate per-drawable shader parameters during rendering | `None` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Wire]`](../../types/#seq)[`[Shard]`](../../types/#seq)[`[[Shard]]`](../../types/#seq)[`None`](../../types/#none) |
| `Params` |  | The parameters to expose to shaders, these default values can later be overriden by materials or drawable Params | `None` | [`None`](../../types/#none)[`{GFX.Texture2D GFX.TextureCube [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4 &(GFX.Texture2D GFX.TextureCube [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4) {Any}}`](../../types/#table)[`&{GFX.Texture2D GFX.TextureCube [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4 &(GFX.Texture2D GFX.TextureCube [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4) {Any}}`](../../types/#contextvar) |
| `RequiredAttributes` |  | The parameters to expose to shaders, these default values can later be overriden by materials or drawable Params | `None` | [`None`](../../types/#none)[`[RequiredAttributes]`](../../types/#seq) |

</div>



## Details

--8<-- "details/shards/GFX/Feature.md"


--8<-- "includes/license.md"

