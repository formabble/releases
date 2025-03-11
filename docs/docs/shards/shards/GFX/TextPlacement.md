---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.TextPlacement

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The text to place. | | [`String`](../../types/#string) |
| `Output ➡️` ||A sequence of text placement structures. | | [`[{quad: Float4 uv: Float4 texture: GFX.Texture2D codepoint: Int coord: Int2}]`](../../types/#seq) |
| `Font` | :fontawesome-solid-circle-plus:{title="No"} No  | Font to use | `none` | [`Var(Text.FontMap)`](../../types/#contextvar) |
| `FontSize` | :fontawesome-solid-circle-plus:{title="No"} No  | The font size to use | `12` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Scale` | :fontawesome-solid-circle-plus:{title="No"} No  | Text scale | `1` | [`Float`](../../types/#float) |
| `VAlign` | :fontawesome-solid-circle-plus:{title="No"} No  | Vertical alignment of baseline (0 = bottom, 1 = top, -0.5 = centered on baseline) | `1` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |

</div>

Places text and returns the placement structure.

--8<-- "includes/license.md"

