---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Gizmos.Box

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`None`](../../types/#none) |
| `Center` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Center of the box | `None` | [`Float3`](../../types/#float3)[`&Float3`](../../types/#contextvar) |
| `Size` | :fontawesome-solid-circle-plus:{title="No"}  | Size of the box | `None` | [`None`](../../types/#none)[`Float3`](../../types/#float3)[`&Float3`](../../types/#contextvar) |
| `Transform` | :fontawesome-solid-circle-plus:{title="No"}  | Transform applied to the box | `None` | [`None`](../../types/#none)[`[Float4]`](../../types/#seq)[`&[Float4]`](../../types/#contextvar) |
| `Color` | :fontawesome-solid-circle-plus:{title="No"}  | Boxar color of the box | `None` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar) |
| `Thickness` | :fontawesome-solid-circle-plus:{title="No"}  | Width of the box in screen space | `None` | [`None`](../../types/#none)[`Int`](../../types/#int)[`Float`](../../types/#float) |

</div>

Draws a box in 3d space

--8<-- "includes/license.md"

