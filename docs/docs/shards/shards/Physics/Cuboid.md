---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.Cuboid

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`Object`](../../types/#object) |
| `Position` | :fontawesome-solid-circle-plus:{title="No"} No  | The position of the shape. | `@f3(0 0 0)` | [`Float3`](../../types/#float3)[`&Float3`](../../types/#contextvar) |
| `Rotation` | :fontawesome-solid-circle-plus:{title="No"} No  | The rotation of the shape. | `@f4(0 0 0 1)` | [`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar) |
| `HalfExtents` | :fontawesome-solid-circle-plus:{title="No"} No  | The half-extents of the cuboid shape. | `@f3(0.5 0.5 0.5)` | [`Float3`](../../types/#float3) |
| `Mass` | :fontawesome-solid-circle-plus:{title="No"} No  | The mass of the shape. | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |

</div>

Physics shape representing a cuboid

--8<-- "includes/license.md"

