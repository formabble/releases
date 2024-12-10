---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Exp

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to use as the exponent for the base e exponential function. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the result of the exponential operation. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the exponential function with base e (Euler's number) for the given input. The exponential function is equivalent to raising Euler's number to the power of the input.

## Details

--8<-- "details/shards/Math/Exp.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Exp/Exp.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Exp/Exp.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

