---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Expm1

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats used as the exponent for the base e exponential function. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the result of the exponential operation. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the exponential function with base e (Euler's number) for the given input and subtracts 1 from the result.

## Details

--8<-- "details/shards/Math/Expm1.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Expm1/Expm1.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Expm1/Expm1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

