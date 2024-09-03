---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.Feature

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The feature object for use in a rendering pass. | | [`GFX.Feature`](../../types/#gfx.feature) |
| `Shaders` | :fontawesome-solid-circle-plus:{title="No"} No  | A list of shader entry points | `None` | [`None`](../../types/#none)[`[{Any}]`](../../types/#seq) |
| `ComposeWith` | :fontawesome-solid-circle-plus:{title="No"} No  | Any table of values that need to be injected into this feature's shaders | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |
| `State` | :fontawesome-solid-circle-plus:{title="No"} No  | The table of render state flags to override | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |
| `ViewGenerators` | :fontawesome-solid-circle-plus:{title="No"} No  | A collection of callbacks that will be run to generate per-view shader parameters during rendering. These parameters are added to the view buffer. | `None` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Wire]`](../../types/#seq)[`[Shard]`](../../types/#seq)[`[[Shard]]`](../../types/#seq)[`None`](../../types/#none) |
| `DrawableGenerators` | :fontawesome-solid-circle-plus:{title="No"} No  | A collection of callbacks that will be run to generate per-drawable shader parameters during rendering | `None` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Wire]`](../../types/#seq)[`[Shard]`](../../types/#seq)[`[[Shard]]`](../../types/#seq)[`None`](../../types/#none) |
| `Params` | :fontawesome-solid-circle-plus:{title="No"} No  | The parameters to add to the object buffer and expose to shaders, these default values can later be modified by the Params parameter in GFX.Material or GFX.Drawable. | `None` | [`None`](../../types/#none)[`{GFX.Texture2D GFX.TextureCube Var(GFX.Buffer) [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4 Var(GFX.Texture2D GFX.TextureCube Var(GFX.Buffer) [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4) {Any}}`](../../types/#table)[`Var({GFX.Texture2D GFX.TextureCube Var(GFX.Buffer) [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4 Var(GFX.Texture2D GFX.TextureCube Var(GFX.Buffer) [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4) {Any}})`](../../types/#contextvar) |
| `BlockParams` | :fontawesome-solid-circle-plus:{title="No"} No  | Custom bindings to expose to shaders | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table) |
| `RequiredAttributes` | :fontawesome-solid-circle-plus:{title="No"} No  | The parameters to expose to shaders, these default values can later be overriden by materials or drawable Params | `None` | [`None`](../../types/#none)[`[RequiredAttributes]`](../../types/#seq) |
| `UniqueVariables` | :fontawesome-solid-circle-plus:{title="No"} No  | List of variables that should be made unique | `None` | [`None`](../../types/#none)[`[String]`](../../types/#seq) |

</div>

This shard creates a feature object based on what was provided in the different parameters.

--8<-- "includes/license.md"

