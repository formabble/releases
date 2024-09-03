---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.Mesh

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input table containing Vertices and Indices keys with the relevent values to construct the mesh object. | | [`{Vertices: [Float2 Float3 Float4 Color] Indices: [Int]}`](../../types/#table) |
| `Output ➡️` ||The created mesh object. | | [`GFX.Mesh`](../../types/#gfx.mesh) |
| `Layout` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The names for each vertex attribute. The sequence provided will also be the pattern that dictates how the sequence value of the Vertices key in the input table will be interpreted. | `None` | [`[String]`](../../types/#seq) |
| `WindingOrder` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Determines which side of the triangle is considered the front face. | `None` | [`WindingOrder`](../../../enums/WindingOrder) |

</div>

This shard creates a mesh object using the data provided in the Vertices and Indices keys of the input table.

## Details

--8<-- "details/shards/GFX/Mesh.md"


--8<-- "includes/license.md"

