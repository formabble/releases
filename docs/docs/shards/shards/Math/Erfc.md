---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Erfc

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to calculate the complementary error function of. This can be any real number. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the probability result of the complementary error function of the input. The output is always between 0 and 2. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the complementary error function of the given input. The complementary error function is related to the probability that the absolute value of a random variable with normal distribution of mean 0 and variance 1/2 is greater than the input value.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Erfc/Erfc.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Erfc/Erfc.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

