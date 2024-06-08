---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.Drawable

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The drawable's transform | | [`[Float4]`](../../types/#seq) |
| `Output ➡️` ||The resulting output of the shard | | [`GFX.Drawable`](../../types/#gfx.drawable) |
| `Mesh` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The mesh to use for this drawable. | `None` | [`&GFX.Mesh`](../../types/#contextvar) |
| `Material` | :fontawesome-solid-circle-plus:{title="No"}  | The material | `None` | [`None`](../../types/#none)[`&GFX.Material`](../../types/#contextvar) |
| `Params` | :fontawesome-solid-circle-plus:{title="No"}  | Shader parameters for this drawable | `None` | [`None`](../../types/#none)[`{GFX.Texture2D GFX.TextureCube &GFX.Buffer [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4 &(GFX.Texture2D GFX.TextureCube &GFX.Buffer [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4)}`](../../types/#table)[`&{GFX.Texture2D GFX.TextureCube &GFX.Buffer [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4 &(GFX.Texture2D GFX.TextureCube &GFX.Buffer [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4)}`](../../types/#contextvar) |
| `Features` | :fontawesome-solid-circle-plus:{title="No"}  | Features to attach to this drawable | `None` | [`None`](../../types/#none)[`[GFX.Feature]`](../../types/#seq)[`&[GFX.Feature]`](../../types/#contextvar) |

</div>

Drawable help text

## Details

--8<-- "details/shards/GFX/Drawable.md"


--8<-- "includes/license.md"

