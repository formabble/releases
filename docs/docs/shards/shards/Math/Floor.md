---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Floor

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to round down. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the input rounded down to the nearest integer (as a float). | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard rounds down the input to the nearest integer.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Floor/Floor.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Floor/Floor.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

