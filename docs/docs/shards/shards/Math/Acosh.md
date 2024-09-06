---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Acosh

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to calculate the inverse hyperbolic cosine of. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the real number whose hyperbolic cosine is the input value. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the inverse hyperbolic cosine of the given input, where the input is the hyperbolic cosine value. The output is the real number whose hyperbolic cosine is the input value.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Acosh/Acosh.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Acosh/Acosh.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

