---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Math.TGamma

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||This shard calculates the gamma function of the given input. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |
| `Output ➡️` ||Outputs the gamma function of the input. The output is always positive for positive inputs. | | [`Float`](../../types/#float)[`Float2`](../../types/#float2)[`Float3`](../../types/#float3)[`Float4`](../../types/#float4)[`Color`](../../types/#color)[`[Any]`](../../types/#seq) |

</div>

This shard calculates the gamma function of the given input. The gamma function is a mathematical function that extends the concept of factorial to non-integer and complex numbers.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Math/TGamma/TGamma.shs"
  ```

  ```
  --8<-- "samples/shards/Math/TGamma/TGamma.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

