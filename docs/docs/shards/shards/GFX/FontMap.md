---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.FontMap

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The font data as a byte array. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The created font map object. | | [`Text.FontMap`](../../types/#text.fontmap) |
| `FilterMode` | :fontawesome-solid-circle-plus:{title="No"} No  | The filter mode to use for the font map | `TextureFiltering::Nearest` | [`TextureFiltering`](../../../enums/TextureFiltering)[`Var(TextureFiltering)`](../../types/#contextvar) |

</div>

Creates a font map from font data.

--8<-- "includes/license.md"

