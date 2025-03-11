---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.DynDrawTextPlacement

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A sequence of text placements. | | [`[{quad: Float4 uv: Float4 texture: GFX.Texture2D codepoint: Int coord: Int2}]`](../../types/#seq) |
| `Output ➡️` ||No output, modifies the dynamic mesh in place. | | [`None`](../../types/#none) |
| `Output` | :fontawesome-solid-circle-plus:{title="No"} No  | Dynamic text mesh to draw to | `none` | [`Var(Text.DynamicMesh)`](../../types/#contextvar) |
| `Offset` | :fontawesome-solid-circle-plus:{title="No"} No  | Text position | `@f3(0 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `Scale` | :fontawesome-solid-circle-plus:{title="No"} No  | Text scale | `1` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Color` | :fontawesome-solid-circle-plus:{title="No"} No  | Text color | `@f4(1 1 1 1)` | [`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar) |
| `Up` | :fontawesome-solid-circle-plus:{title="No"} No  | Up direction | `@f3(0 -1 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `Right` | :fontawesome-solid-circle-plus:{title="No"} No  | Right direction | `@f3(1 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `HAlign` | :fontawesome-solid-circle-plus:{title="No"} No  | Horizontal alignment (0 = left, 0.5 = centered, 1 = right) | `0` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |

</div>

Draws text to a dynamic mesh.

--8<-- "includes/license.md"

