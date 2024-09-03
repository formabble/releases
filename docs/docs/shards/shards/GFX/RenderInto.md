---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.RenderInto

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input value will pass through unchanged. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Textures` | :fontawesome-solid-circle-plus:{title="No"} No  | The textures to render into to create. | `None` | [`None`](../../types/#none)[`{{Any} Var(GFX.Texture2D)}`](../../types/#table) |
| `Contents` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The shards that will render into the given textures. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Size` | :fontawesome-solid-circle-plus:{title="No"} No  | The reference size. This will control the size of the render targets. | `None` | [`None`](../../types/#none)[`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar) |
| `MatchOutputSize` | :fontawesome-solid-circle-plus:{title="No"} No  | When true, the texture rendered into is automatically resized to match the output size. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Viewport` | :fontawesome-solid-circle-plus:{title="No"} No  | The viewport. | `None` | [`None`](../../types/#none)[`Int4`](../../types/#int4)[`Var(Int4)`](../../types/#contextvar) |
| `WindowRegion` | :fontawesome-solid-circle-plus:{title="No"} No  | Sets the window region for input handling. | `None` | [`None`](../../types/#none)[`Int4`](../../types/#int4)[`Var(Int4)`](../../types/#contextvar) |

</div>

Renders within a region of the screen and/or to a render target

--8<-- "includes/license.md"

