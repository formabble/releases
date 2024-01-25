---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.IntInput

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value is ignored. | | [`None`](../../types/#none) |
| `<output>` ||The value produced. | | [`Int`](../../types/#int) |
| `Variable` |  | The variable that holds the input value. | `None` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar) |
| `Prefix` |  | Display a prefix before the number. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |

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

