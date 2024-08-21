---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Gizmos.Grid

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`None`](../../types/#none) |
| `Center` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Center of the disc | `None` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `XBase` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | X direction of the grid | `None` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `YBase` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Y direction of the grid | `None` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `Thickness` | :fontawesome-solid-circle-plus:{title="No"} No  | Width of the line in screen space | `None` | [`None`](../../types/#none)[`Int`](../../types/#int)[`Float`](../../types/#float) |
| `StepSize` | :fontawesome-solid-circle-plus:{title="No"} No  | Step size of the grid lines | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Size` | :fontawesome-solid-circle-plus:{title="No"} No  | Number of grid lines | `None` | [`None`](../../types/#none)[`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Color` | :fontawesome-solid-circle-plus:{title="No"} No  | Linear color of the grid lines | `None` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar) |

</div>

Draws a grid

--8<-- "includes/license.md"

