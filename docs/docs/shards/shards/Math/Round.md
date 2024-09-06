---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Round

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to round. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the input rounded to the nearest integer (as a float). | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard rounds the input floating-point number to the nearest integer.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Round/Round.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Round/Round.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

