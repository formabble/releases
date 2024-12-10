---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Tan

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to calculate the tangent of. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the tangent of the input. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the tangent of the given input, where the input is the angle in radians.

## Details

--8<-- "details/shards/Math/Tan.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Tan/Tan.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Tan/Tan.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

