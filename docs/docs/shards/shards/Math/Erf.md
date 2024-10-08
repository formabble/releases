---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Erf

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to calculate the error function of. This can be any real number. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs probability result of the error function of the input. The output is always between -1 and 1. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the error function of the given input. The error function is related to the probability that a random variable with normal distribution of mean 0 and variance 1/2 falls in the range specified by the input value.

## Details

--8<-- "details/shards/Math/Erf.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Erf/Erf.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Erf/Erf.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

