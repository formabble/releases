---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.glTF

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`[Float4]`](../../types/#seq)[`{transform: [Float4] None: Any}`](../../types/#table) |
| `Output ➡️` ||The resulting output of the shard | | [`GFX.Drawable`](../../types/#gfx.drawable) |
| `Path` | :fontawesome-solid-circle-plus:{title="No"}  | The path to load the model from | `None` | [`None`](../../types/#none)[`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Bytes` | :fontawesome-solid-circle-plus:{title="No"}  | The bytes to load the model from | `None` | [`None`](../../types/#none)[`Bytes`](../../types/#bytes)[`&Bytes`](../../types/#contextvar) |
| `Copy` | :fontawesome-solid-circle-plus:{title="No"}  | Reference to another glTF model to copy | `None` | [`None`](../../types/#none)[`&GFX.Drawable`](../../types/#contextvar) |
| `Params` | :fontawesome-solid-circle-plus:{title="No"}  | Shader parameters for this drawable | `None` | [`None`](../../types/#none)[`{GFX.Texture2D GFX.TextureCube &GFX.Buffer [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4 &(GFX.Texture2D GFX.TextureCube &GFX.Buffer [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4)}`](../../types/#table)[`&{GFX.Texture2D GFX.TextureCube &GFX.Buffer [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4 &(GFX.Texture2D GFX.TextureCube &GFX.Buffer [Float4] Float4 Float3 Float2 Float Int Int2 Int3 Int4)}`](../../types/#contextvar) |
| `Features` | :fontawesome-solid-circle-plus:{title="No"}  | Features to attach to this drawable | `None` | [`None`](../../types/#none)[`[GFX.Feature]`](../../types/#seq)[`&[GFX.Feature]`](../../types/#contextvar) |
| `AnimationController` | :fontawesome-solid-circle-plus:{title="No"}  | The animation controller | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `WrapRootNode` | :fontawesome-solid-circle-plus:{title="No"}  | Wrap the root node so animations applied to it still work | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>



## Details

--8<-- "details/shards/GFX/glTF.md"


--8<-- "includes/license.md"

