---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Normalize

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Accepts a float vector of any dimension (e.g., float2, float3, float4) or a float sequence of any length. | | [`[Float]`](../../types/#seq)[`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq) |
| `Output ➡️` ||Returns a float vector of the same dimension or a float sequence of the same length as what was passed as input but with its values normalized to a magnitude of 1. | | [`[Float]`](../../types/#seq)[`Float2`](../../types/#float2)[`[Float2]`](../../types/#seq)[`Float3`](../../types/#float3)[`[Float3]`](../../types/#seq)[`Float4`](../../types/#float4)[`[Float4]`](../../types/#seq) |
| `Positive` | :fontawesome-solid-circle-plus:{title="No"} No  | If set to true, the output will be in the range 0.0~1.0 instead of -1.0~1.0. | `false` | [`Bool`](../../types/#bool) |

</div>

This shard normalizes a float vector of any dimension or a sequence of floats, scaling it to have a magnitude of 1 while preserving its direction. By default, output values can range from -1.0 to 1.0. If the 'Positive' parameter is set to true, the output will be scaled to the range 0.0 to 1.0. For example, normalizing [4.0 -5.0 6.0 -7.0] will result in [0.3563, -0.4454, 0.5345, -0.6236], which has a length of 1. 

--8<-- "includes/license.md"

