---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Acos

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to calculate the inverse cosine of. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the angle in radians whose cosine is the input value. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the inverse cosine of the given input, where the input is the cosine value. The output is the angle in radians whose cosine is the input value.

## Details

--8<-- "details/shards/Math/Acos.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Acos/Acos.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Acos/Acos.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

