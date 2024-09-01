---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Float2Input

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value produced. | | [`Float2`](../../types/#float2) |
| `Variable` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The variable that holds the input value. | `None` | [`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |

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

