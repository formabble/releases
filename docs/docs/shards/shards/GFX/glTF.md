---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.glTF

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||This shard can take 2 different types of input. It can take a 4x4 transformation for the glTF model to adopt. Or, it can accept a table which contain the transformation matrix and additional information to modify the materials of the glTF model. | | [`[Float4](4)`](../../types/#seq)[`{transform: [Float4](4) None: Any}`](../../types/#table) |
| `Output ➡️` ||Returns the drawable object. | | [`GFX.Drawable`](../../types/#gfx.drawable) |
| `Path` | :fontawesome-solid-circle-plus:{title="No"} No  | The path to load the model from | `None` | [`None`](../../types/#none)[`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Bytes` | :fontawesome-solid-circle-plus:{title="No"} No  | The bytes to load the model from | `None` | [`None`](../../types/#none)[`Bytes`](../../types/#bytes)[`Var(Bytes)`](../../types/#contextvar) |
| `Copy` | :fontawesome-solid-circle-plus:{title="No"} No  | Reference to another glTF model to copy | `None` | [`None`](../../types/#none)[`Var(GFX.Drawable)`](../../types/#contextvar) |
| `Params` | :fontawesome-solid-circle-plus:{title="No"} No  | Shader parameters for this drawable | `None` | [`None`](../../types/#none)[`{GFX.Texture2D GFX.TextureCube Var(GFX.Buffer) [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4 Var(GFX.Texture2D GFX.TextureCube Var(GFX.Buffer) [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4)}`](../../types/#table)[`Var({GFX.Texture2D GFX.TextureCube Var(GFX.Buffer) [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4 Var(GFX.Texture2D GFX.TextureCube Var(GFX.Buffer) [Float4](4) Float4 Float3 Float2 Float Int Int2 Int3 Int4)})`](../../types/#contextvar) |
| `Features` | :fontawesome-solid-circle-plus:{title="No"} No  | Features to attach to this drawable | `None` | [`None`](../../types/#none)[`[GFX.Feature]`](../../types/#seq)[`Var([GFX.Feature])`](../../types/#contextvar) |
| `AnimationController` | :fontawesome-solid-circle-plus:{title="No"} No  | The animation controller | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `WrapRootNode` | :fontawesome-solid-circle-plus:{title="No"} No  | Wrap the root node so animations applied to it still work | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>

This shard takes the glTF model (specified either in the Path, Bytes or Copy parameter) and outputs a drawable object which can be subsequently added to the drawables queue for the render pipline.

## Details

--8<-- "details/shards/GFX/glTF.md"


--8<-- "includes/license.md"

