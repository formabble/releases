---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Gizmos.Disc

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`None`](../../types/#none) |
| `Center` | :fontawesome-solid-circle-plus:{title="No"} No  | Center of the disc | `none` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `XBase` | :fontawesome-solid-circle-plus:{title="No"} No  | X direction of the plane the disc is on | `none` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `YBase` | :fontawesome-solid-circle-plus:{title="No"} No  | Y direction of the plane the disc is on | `none` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `OuterRadius` | :fontawesome-solid-circle-plus:{title="No"} No  | Radius of the outer circle of the disc | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `InnerRadius` | :fontawesome-solid-circle-plus:{title="No"} No  | Radius of the inner circle of the disc | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Color` | :fontawesome-solid-circle-plus:{title="No"} No  | Linear color of the disc | `none` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar) |
| `Culling` | :fontawesome-solid-circle-plus:{title="No"} No  | Back-face culling of the disc | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |

</div>

Draws a filled disc in 3d space

--8<-- "includes/license.md"

