---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Project

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes a float3 vector representing the 3D point in world space where x, y, and z are the coordinates in world space. | | [`Float3`](../../types/#float3) |
| `Output ➡️` ||Outputs a float3 vector representing the projected 2D point (x, y) in screen space, with the z component representing the depth. | | [`Float3`](../../types/#float3) |
| `Matrix` | :fontawesome-solid-circle-plus:{title="No"} No  | The combined 4x4 view-projection matrix (sequence of four float4 vectors) to use. | `none` | [`[Float4](4)`](../../types/#seq)[`Var([Float4](4))`](../../types/#contextvar) |
| `ScreenSize` | :fontawesome-solid-circle-plus:{title="No"} No  | The size of the screen or viewport in pixels. | `none` | [`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |
| `FlipY` | :fontawesome-solid-circle-plus:{title="No"} No  | Flip Y coordinate (on by default). | `true` | [`Bool`](../../types/#bool)[`Var(Var(Bool))`](../../types/#contextvar) |

</div>

This shard converts the input 3D world coordinates to 2D screen coordinates using a view-projection matrix. Both 3D and 2D coordinates are represented as float3 vectors (vectors with 3 float elements).It performs the full projection pipeline including matrix multiplication, perspective division, and viewport transformation using the 4x4 view-projection matrix specified in the Matrix parameter and the screen size in the ScreenSize parameter.

--8<-- "includes/license.md"

