---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Cbrt

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to calculate the cube root of. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the cube root of the input. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the cube root of the given input.

## Details

--8<-- "details/shards/Math/Cbrt.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Cbrt/Cbrt.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Cbrt/Cbrt.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

