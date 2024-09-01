---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.LookAt

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes a table with two float3 values: 'Position' (the camera's position) and 'Target' (the point the camera is looking at). Eg. { Position: @f3(1 2 3) Target: @f3(4 5 6) } | | [`{Position: Float3 Target: Float3}`](../../types/#table) |
| `Output ➡️` ||Returns a 4x4 view matrix (a sequence of four float4 vectors). | | [`[Float4](4)`](../../types/#seq) |

</div>

This shard creates a 4x4 view matrix (a sequence of four float4 vectors) for a camera based on the camera's position and a target point which is represented as a table with two float3 vectors: 'Position' and 'Target', that is passed as input. A float4 vector is a vector with 4 float elements while a float3 vector is a vector with 3 float elements.

--8<-- "includes/license.md"

