---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.QuatRotate

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes a float3 vector representing the 3D vector to be rotated. | | [`Float3`](../../types/#float3) |
| `Output ➡️` ||Outputs a float3 vector representing the rotated 3D vector. | | [`Float3`](../../types/#float3) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The float4 vector representing the quaternion to rotate the input 3D vector by. | `none` | [`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar) |

</div>

This shard rotates the input 3D vector (represented as a float3) by the quaternion (represented as a float4) specified in the Operand parameter and outputs the resulting rotated 3D vector. A float4 vector is a vector with 4 float elements while a float3 vector is a vector with 3 float elements.

--8<-- "includes/license.md"

