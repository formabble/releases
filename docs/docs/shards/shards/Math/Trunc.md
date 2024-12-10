---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.Trunc

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input float or sequence of floats to truncate. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the input truncated to the nearest integer (as a float). | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard truncates the input floating-point number towards zero, removing any fractional part without rounding.

## Details

--8<-- "details/shards/Math/Trunc.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/Trunc/Trunc.shs"
  ```

  ```
  --8<-- "samples/shards/Math/Trunc/Trunc.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

