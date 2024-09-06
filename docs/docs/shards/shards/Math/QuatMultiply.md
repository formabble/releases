---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.QuatMultiply

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes a float4 vector representing the quaternion to be multiplied. | | [`Float4`](../../types/#float4) |
| `Output ➡️` ||Outputs a float4 vector representing the resulting quaternion after multiplication. | | [`Float4`](../../types/#float4) |
| `Operand` | :fontawesome-solid-circle-plus:{title="No"} No  | The float4 vector representing the second quaternion to multiply the input quaternion with. | `none` | [`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar) |

</div>

This shard multiplies two quaternions (represented as float4 vectors) together. It combines the two rotations by multiplying the input quaternion with the operand quaternion. A float4 vector is a vector with 4 float elements.

--8<-- "includes/license.md"

