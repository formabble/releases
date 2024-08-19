---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Slerp

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Takes a float value between 0 and 1 representing the interpolation factor. | | [`Float`](../../types/#float) |
| `Output ➡️` ||Returns a float4 vector representing the interpolated quaternion. | | [`Float4`](../../types/#float4) |
| `First` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The float4 vector representing the first quaternion to interpolate from. | `None` | [`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar) |
| `Second` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The float4 vector representing the second quaternion to interpolate to. | `None` | [`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar) |

</div>

This shard performs Spherical Linear Interpolation (SLERP) between two quaternions (represented as float4 vectors). It smoothly interpolates between the quaternions specified in the 'First' parameter and 'Second' parameter based on the input interpolation factor. A float4 vector is a vector with 4 float elements.

--8<-- "includes/license.md"

