---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Sinh

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to calculate the hyperbolic sine of. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the hyperbolic sine of the input. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the hyperbolic sine of the given input, where the input is the real number. The hyperbolic sine is a hyperbolic function that is analogous to the circular sine function, but it uses exponential functions instead of angles.

## Details

--8<-- "details/shards/Math/Sinh.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Sinh/Sinh.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Sinh/Sinh.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

