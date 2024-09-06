---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Atanh

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to calculate the inverse hyperbolic tangent of. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the real number whose hyperbolic tangent is the input value. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the inverse hyperbolic tangent of the given input (atanh(x)), where x, outputs y such that tanh(y) = x.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Atanh/Atanh.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Atanh/Atanh.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

