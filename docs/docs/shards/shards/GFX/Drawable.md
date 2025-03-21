---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.Drawable

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The transformation matrix of the drawable object to adopt. | | [`[Float4](4)`](../../types/#seq) |
| `Output ➡️` ||The drawable object. | | [`GFX.Drawable`](../../types/#gfx.drawable) |
| `Mesh` | :fontawesome-solid-circle-plus:{title="No"} No  | The mesh to use for this drawable. | `none` | [`Var(GFX.Mesh)`](../../types/#contextvar) |
| `Material` | :fontawesome-solid-circle-plus:{title="No"} No  | The material | `none` | [`None`](../../types/#none)[`Var(GFX.Material)`](../../types/#contextvar) |
| `Params` | :fontawesome-solid-circle-plus:{title="No"} No  | Shader parameters used for Drawable rendering | `none` | [`None`](../../types/#none)[`{GFX.Texture2D GFX.TextureCube GFX.Buffer [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4 {Any} Var(GFX.Texture2D GFX.TextureCube GFX.Buffer [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4 {Any})}`](../../types/#table)[`Var({GFX.Texture2D GFX.TextureCube GFX.Buffer [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4 {Any} Var(GFX.Texture2D GFX.TextureCube GFX.Buffer [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4 {Any})})`](../../types/#contextvar) |
| `Features` | :fontawesome-solid-circle-plus:{title="No"} No  | Features to attach to this drawable | `none` | [`None`](../../types/#none)[`[GFX.Feature]`](../../types/#seq)[`Var([GFX.Feature])`](../../types/#contextvar) |

</div>

This shard creates a drawable object that can be added to a drawables queue for the render pipeline.

--8<-- "includes/license.md"

