---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Property

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`Float4`](../../types/#float4)[`Float2`](../../types/#float2)[`Float`](../../types/#float)[`Bool`](../../types/#bool) |
| `Property` | :fontawesome-solid-circle-plus:{title="No"} No  | The property to retrieve from the UI context | `none` | [`UIProperty`](../../../enums/UIProperty) |

</div>

Retrieves values from the current state of the UI.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Property/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Property/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

