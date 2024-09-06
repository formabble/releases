---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Exp2

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats used as the exponent for the base 2 exponential function. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the result of the exponential operation. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the exponential function with base 2 for the given input. The exponential function with base 2 is equivalent to raising 2 to the power of the input.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Exp2/Exp2.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Exp2/Exp2.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

