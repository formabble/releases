---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.FastInvSqrt

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to calculate the inverse square root of. This value must be a positive number or sequence of positive numbers. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the inverse square root of the input. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the inverse square root of the given input.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/FastInvSqrt/FastInvSqrt.shs"
  ```

  ```
  --8<-- "samples/shards/Math/FastInvSqrt/FastInvSqrt.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

