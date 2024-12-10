---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Scaling

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes a float3 vector (a vector with 3 float elements) that represents the scaling factors in x, y, and z directions. The first element in the vector being x, the second y and the third z. | | [`Float3`](../../types/#float3) |
| `Output ➡️` ||Outputs a 4x4 scaling matrix (a sequence of four float4 vectors). | | [`[Float4](4)`](../../types/#seq) |

</div>

This shard creates a 4x4 scaling matrix (a sequence of four float4 vectors) from a float3 vector input that represents the scaling factors in x, y, and z directions. A float4 vector is a vector with 4 float elements while a float3 vector is a vector with 3 float elements.

--8<-- "includes/license.md"

