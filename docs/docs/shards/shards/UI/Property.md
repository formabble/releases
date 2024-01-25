---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Property

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`Float4`](../../types/#float4)[`Float2`](../../types/#float2)[`Float`](../../types/#float)[`Bool`](../../types/#bool) |
| `Property` |  | The property to retrieve from the UI context | `None` | [`UIProperty`](../../../enums/UIProperty) |

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

