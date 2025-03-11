---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.Material

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Outputs the material created as a material object. | | [`GFX.Material`](../../types/#gfx.material) |
| `Params` | :fontawesome-solid-circle-plus:{title="No"} No  | Shader parameters used for Drawable rendering | `none` | [`None`](../../types/#none)[`{GFX.Texture2D GFX.TextureCube GFX.Buffer [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4 {Any} Var(GFX.Texture2D GFX.TextureCube GFX.Buffer [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4 {Any})}`](../../types/#table)[`Var({GFX.Texture2D GFX.TextureCube GFX.Buffer [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4 {Any} Var(GFX.Texture2D GFX.TextureCube GFX.Buffer [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4 {Any})})`](../../types/#contextvar) |
| `Features` | :fontawesome-solid-circle-plus:{title="No"} No  | Features to attach to this drawable | `none` | [`None`](../../types/#none)[`[GFX.Feature]`](../../types/#seq)[`Var([GFX.Feature])`](../../types/#contextvar) |

</div>

This shard creates a material from the given parameters and features.

## Details

--8<-- "details/shards/GFX/Material.md"


--8<-- "includes/license.md"

