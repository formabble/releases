---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Float2Input

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value is ignored. | | [`None`](../../types/#none) |
| `<output>` ||The value produced. | | [`Float2`](../../types/#float2) |
| `Variable` |  | The variable that holds the input value. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |

</div>

A numeric input.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Float2Input/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Float2Input/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

