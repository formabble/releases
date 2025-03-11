---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.DynDrawTextWorldSpace

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The text to draw. | | [`String`](../../types/#string) |
| `Output ➡️` ||No output, modifies the dynamic mesh in place. | | [`None`](../../types/#none) |
| `Output` | :fontawesome-solid-circle-plus:{title="No"} No  | Dynamic text mesh to draw to | `none` | [`Var(Text.DynamicMesh)`](../../types/#contextvar) |
| `Offset` | :fontawesome-solid-circle-plus:{title="No"} No  | Text position | `@f3(0 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `Scale` | :fontawesome-solid-circle-plus:{title="No"} No  | Text scale | `1` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Color` | :fontawesome-solid-circle-plus:{title="No"} No  | Text color | `@f4(1 1 1 1)` | [`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar) |
| `Up` | :fontawesome-solid-circle-plus:{title="No"} No  | Up direction | `@f3(0 -1 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `Right` | :fontawesome-solid-circle-plus:{title="No"} No  | Right direction | `@f3(1 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `HAlign` | :fontawesome-solid-circle-plus:{title="No"} No  | Horizontal alignment (0 = left, 0.5 = centered, 1 = right) | `0` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Font` | :fontawesome-solid-circle-plus:{title="No"} No  | Font to use | `none` | [`Var(Text.FontMap)`](../../types/#contextvar) |
| `WorldSize` | :fontawesome-solid-circle-plus:{title="No"} No  | Desired world space height of the font | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `View` | :fontawesome-solid-circle-plus:{title="No"} No  | View matrix | `none` | [`Var(GFX.View)`](../../types/#contextvar) |
| `ViewSize` | :fontawesome-solid-circle-plus:{title="No"} No  | View size | `none` | [`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar) |
| `VAlign` | :fontawesome-solid-circle-plus:{title="No"} No  | Vertical alignment of baseline (0 = bottom, 1 = top, -0.5 = centered on baseline) | `-0.5` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |

</div>

Draws text to a dynamic mesh.

--8<-- "includes/license.md"

