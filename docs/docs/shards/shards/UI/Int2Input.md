---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Int2Input

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value produced. | | [`Int2`](../../types/#int2) |
| `Variable` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The variable that holds the input value. | `None` | [`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar) |

</div>

A numeric input.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Int2Input/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Int2Input/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

