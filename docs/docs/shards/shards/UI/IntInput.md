---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.IntInput

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value produced. | | [`Int`](../../types/#int) |
| `Variable` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The variable that holds the input value. | `None` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Prefix` | :fontawesome-solid-circle-plus:{title="No"} No  | Display a prefix before the number. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |

</div>

A numeric input.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/IntInput/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/IntInput/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

