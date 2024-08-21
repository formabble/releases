---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Gizmos.SolidRect

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`None`](../../types/#none) |
| `Center` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Starting position of the rectangle | `None` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `XBase` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | X direction of the plane the rectangle is on | `None` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `YBase` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Y direction of the plane the rectangle is on | `None` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `Size` | :fontawesome-solid-circle-plus:{title="No"} No  | Size of the rectange | `None` | [`None`](../../types/#none)[`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |
| `Color` | :fontawesome-solid-circle-plus:{title="No"} No  | Rectanglear color of the rectangle | `None` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar) |
| `Culling` | :fontawesome-solid-circle-plus:{title="No"} No  | Back-face culling of the rectangle | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |

</div>

Draws a filled rectangle in 3d space

--8<-- "includes/license.md"

