---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.LGamma

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to calculate the log gamma function of. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the log gamma function of the input. The output is always positive for positive inputs. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the log gamma function of the given input. The log gamma function is the natural logarithm of the absolute value of the gamma function.

## Details

--8<-- "details/shards/Math/LGamma.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/LGamma/LGamma.shs"
  ```

  ```
  --8<-- "samples/shards/Math/LGamma/LGamma.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

