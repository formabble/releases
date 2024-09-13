---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Log2

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to calculate the base 2 logarithm of. This value must be a positive number or sequence of positive numbers. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the base 2 logarithm. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the base 2 logarithm for the given input. The output is the exponent to which 2 must be raised to obtain the input value.

## Details

--8<-- "details/shards/Math/Log2.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Log2/Log2.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Log2/Log2.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

