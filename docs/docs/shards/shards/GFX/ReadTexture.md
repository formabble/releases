---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.ReadTexture

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`GFX.Texture2D`](../../types/#gfx.texture2d)[`GFX.TextureCube`](../../types/#gfx.texturecube) |
| `<output>` || | | [`Image`](../../types/#image) |
| `Wait` |  | Wait for read to complete | `false` | [`Bool`](../../types/#bool) |

</div>

--8<-- "includes/experimental.md"

Adds a render step that reads back the rendered textures into a images, the returned images 

--8<-- "includes/license.md"

