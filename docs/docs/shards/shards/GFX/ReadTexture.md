---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.ReadTexture

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`GFX.Texture2D`](../../types/#gfx.texture2d)[`GFX.TextureCube`](../../types/#gfx.texturecube) |
| `Output ➡️` ||The resulting output of the shard | | [`Image`](../../types/#image) |
| `Wait` | :fontawesome-solid-circle-plus:{title="No"} No  | Wait for read to complete | `false` | [`Bool`](../../types/#bool) |

</div>

Adds a render step that reads back the rendered textures into a images, the returned images 

--8<-- "includes/license.md"

