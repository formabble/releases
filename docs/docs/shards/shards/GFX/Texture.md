---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.Texture

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Image`](../../types/#image)[`None`](../../types/#none)[`Any`](../../types/#any) |
| `<output>` || | | [`GFX.Texture2D`](../../types/#gfx.texture2d)[`GFX.TextureCube`](../../types/#gfx.texturecube) |
| `InterpretAs` |  | Type to interpret image data as. (From image only, Default: UNormSRGB for RGBA8 images, UNorm for other formats) | `None` | [`TextureType`](../../../enums/TextureType) |
| `Format` |  | The format to use to create the texture. The texture will be usable as a render target. (Render target only) | `None` | [`TextureFormat`](../../../enums/TextureFormat)[`&TextureFormat`](../../types/#contextvar) |
| `Resolution` |  | The resolution of the texture to create. (Render target only) | `None` | [`Int2`](../../types/#int2)[`&Int2`](../../types/#contextvar) |
| `MipLevels` |  | The number of mip levels to create. (Render target only) | `None` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar) |
| `Dimension` |  | The type of texture to create. (Render target only) | `None` | [`TextureDimension`](../../../enums/TextureDimension) |
| `Addressing` |  | For sampling, sets the address modes. | `None` | [`TextureAddressing`](../../../enums/TextureAddressing)[`[TextureAddressing]`](../../types/#seq) |
| `Filtering` |  | For sampling, sets the filter mode. | `None` | [`TextureFiltering`](../../../enums/TextureFiltering) |

</div>

Creates a texture from an image. Or as a render target

--8<-- "includes/license.md"

