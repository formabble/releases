---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.DynToMesh

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Text.DynamicMesh`](../../types/#text.dynamicmesh) |
| `Output ➡️` ||The resulting output of the shard | | [`[{mesh: GFX.Mesh texture: GFX.Texture2D}]`](../../types/#seq) |
| `WindingOrder` | :fontawesome-solid-circle-plus:{title="No"} No  | Determines which side of the triangle is considered the front face. Typically use CW for UI space (y=down), CCW for world space (y=up) | `WindingOrder::CW` | [`WindingOrder`](../../../enums/WindingOrder)[`Var(WindingOrder)`](../../types/#contextvar) |

</div>

Converts a dynamic text mesh into a static mesh

--8<-- "includes/license.md"

