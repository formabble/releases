---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Cosh

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to calculate the hyperbolic cosine of. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the hyperbolic cosine of the input. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the hyperbolic cosine of the given input, where the input is the real number. The hyperbolic cosine is a hyperbolic function that is analogous to the circular cosine function, but it uses exponential functions instead of angles.

## Details

--8<-- "details/shards/Math/Cosh.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Cosh/Cosh.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Cosh/Cosh.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

