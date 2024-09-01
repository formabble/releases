---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.ColorInput

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The selected color. | | [`Color`](../../types/#color) |
| `Variable` | :fontawesome-solid-circle-plus:{title="No"} No  | The variable that holds the input value. | `None` | [`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

A widget where a color can be selected.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/ColorInput/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/ColorInput/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

