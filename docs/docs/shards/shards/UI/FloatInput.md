---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.FloatInput

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value produced. | | [`Float`](../../types/#float) |
| `Variable` | :fontawesome-solid-circle-plus:{title="No"} No  | The variable that holds the input value. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Prefix` | :fontawesome-solid-circle-plus:{title="No"} No  | Display a prefix before the number. | `none` | [`String`](../../types/#string)[`None`](../../types/#none) |

</div>

A numeric input.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/FloatInput/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/FloatInput/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

