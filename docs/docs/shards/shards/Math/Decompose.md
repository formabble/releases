---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Decompose

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes a 4x4 transformation matrix as input. This matrix should be a sequence of four float4 vectors representing the combined translation, rotation, and scale transformations. | | [`[Float4](4)`](../../types/#seq) |
| `Output ➡️` ||Returns a table containing the Translation, Rotation, and Scale components. Eg. {translation: @f3(1 2 3), rotation: @f4(0 0 0 1), scale: @f3(1 1 1)} | | [`{translation: Float3 rotation: Float4 scale: Float3}`](../../types/#table) |

</div>

This shard converts a 4x4 transformation matrix (a sequence of four float 4 vectors) into a table containing its constituent Translation, Rotation, and Scale components. The table has a Translation key with a float3 vector value representing positions on the x, y, z axes, a Rotation key with a float4 vector value representing the quaternion rotation, and a Scale key with a float3 vector value, representing the size on the x, y, z axes. Eg. {translation: @f3(1 2 3), rotation: @f4(0 0 0 1), scale: @f3(1 1 1)} A float3 vector is a vector with 3 float elements while a float4 vector is a vector with 4 float elements. 

--8<-- "includes/license.md"

