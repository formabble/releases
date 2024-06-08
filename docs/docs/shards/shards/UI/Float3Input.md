---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Float3Input

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value produced. | | [`Float3`](../../types/#float3) |
| `Variable` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The variable that holds the input value. | `None` | [`Float3`](../../types/#float3)[`&Float3`](../../types/#contextvar) |

</div>

A numeric input.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Float3Input/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Float3Input/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

