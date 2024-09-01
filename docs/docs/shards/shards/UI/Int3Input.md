---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Int3Input

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value produced. | | [`Int3`](../../types/#int3) |
| `Variable` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The variable that holds the input value. | `None` | [`Int3`](../../types/#int3)[`Var(Int3)`](../../types/#contextvar) |

</div>

A numeric input.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Int3Input/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Int3Input/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

