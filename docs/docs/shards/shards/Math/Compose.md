---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Compose

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes a table as input. The table should have a Translation key with a float3 vector value, a Rotation key with a float4 vector value and a Scale key with a float3 vector value. Eg. {translation: @f3(1 2 3), rotation: @f4(0 0 0 1), scale: @f3(1 1 1)} | | [`{translation: Float3 rotation: Float4 scale: Float3}`](../../types/#table) |
| `Output ➡️` ||Outputs a 4x4 transformation matrix (sequence of four float4 vectors) that combines the input translation, rotation, and scale. | | [`[Float4](4)`](../../types/#seq) |

</div>

Creates a 4x4 transformation matrix (sequence of four float4 vectors) from a table containing the appropriate Translation, Rotation and Scale values. values. The translation value should be a float3 vector representing positions on the x y z axis. The rotation value should be a float4 vector representing the quaternion rotation. Lastly, the scale should be a float3 vector representing the size on the x y and z axis. Eg. {translation: @f3(1 2 3), rotation: @f4(0 0 0 1), scale: @f3(1 1 1)} A float3 vector is a vector with 3 float elements while a float4 vector is a vector with 4 float elements.

--8<-- "includes/license.md"

