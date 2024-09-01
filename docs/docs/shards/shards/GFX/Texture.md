---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.Texture

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Image`](../../types/#image)[`None`](../../types/#none)[`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`GFX.Texture2D`](../../types/#gfx.texture2d)[`GFX.TextureCube`](../../types/#gfx.texturecube) |
| `InterpretAs` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Type to interpret image data as. (From image only, Default: UNormSRGB for RGBA8 images, UNorm for other formats) | `None` | [`TextureType`](../../../enums/TextureType) |
| `Format` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The format to use to create the texture. The texture will be usable as a render target. (Render target only) | `None` | [`TextureFormat`](../../../enums/TextureFormat)[`Var(TextureFormat)`](../../types/#contextvar) |
| `Resolution` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The resolution of the texture to create. (Render target only) | `None` | [`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar) |
| `MipLevels` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The number of mip levels to create. (Render target only) | `None` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Dimension` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The type of texture to create. (Render target only) | `None` | [`TextureDimension`](../../../enums/TextureDimension) |
| `Addressing` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | For sampling, sets the address modes. | `None` | [`TextureAddressing`](../../../enums/TextureAddressing)[`[TextureAddressing]`](../../types/#seq) |
| `Filtering` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | For sampling, sets the filter mode. | `None` | [`TextureFiltering`](../../../enums/TextureFiltering) |
| `Label` | :fontawesome-solid-circle-plus:{title="No"} No  | Debug label for this object. | `None` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Creates a texture from an image. Or as a render target

--8<-- "includes/license.md"

