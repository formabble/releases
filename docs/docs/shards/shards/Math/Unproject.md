---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Unproject

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes a float3 vector representing the 3D vector where x and y are screen coordinates, and z is the depth value in screen space. | | [`Float3`](../../types/#float3) |
| `Output ➡️` ||Outputs a float3 vector representing the unprojected 3D point in world space. | | [`Float3`](../../types/#float3) |
| `Matrix` | :fontawesome-solid-circle-plus:{title="No"} No  | The combined 4x4 view-projection matrix (sequence of four float4 vectors) to use. | `none` | [`[Float4](4)`](../../types/#seq)[`Var([Float4](4))`](../../types/#contextvar) |
| `ScreenSize` | :fontawesome-solid-circle-plus:{title="No"} No  | The float2 vector representing the size of the screen or viewport in pixels. | `none` | [`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |
| `DepthRange` | :fontawesome-solid-circle-plus:{title="No"} No  | The float2 vector representing the range of depth values (near and far planes). Default is [0, 1]. | `none` | [`None`](../../types/#none)[`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |
| `FlipY` | :fontawesome-solid-circle-plus:{title="No"} No  | Flip Y coordinate (on by default) | `true` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`Var(Var(Bool))`](../../types/#contextvar) |

</div>

This shard converts 2D screen coordinates back to 3D world coordinates using the inverse of a view-projection matrix. Both 3D and 2D coordinates are represented as float3 vectors (vectors with 3 float elements).It performs the reverse operation of the projection pipeline, including inverse matrix multiplication, and coordinate space transformations using the 4x4 view-projection matrix specified in the Matrix parameter and the screen size in the ScreenSize parameter.

--8<-- "includes/license.md"

