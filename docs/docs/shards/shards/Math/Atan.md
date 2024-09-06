---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Atan

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to calculate the inverse tangent of. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the angle in radians whose tangent is the input value. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the inverse tangent of the given input, where the input is the tangent value. The output is the angle in radians whose tangent is the input value.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Atan/Atan.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Atan/Atan.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

