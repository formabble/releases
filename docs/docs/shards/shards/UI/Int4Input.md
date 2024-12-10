---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Int4Input

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value produced. | | [`Int4`](../../types/#int4) |
| `Variable` | :fontawesome-solid-circle-plus:{title="No"} No  | The variable that holds the input value. | `none` | [`Int4`](../../types/#int4)[`Var(Int4)`](../../types/#contextvar) |

</div>

A numeric input.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Int4Input/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Int4Input/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

