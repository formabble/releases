---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Combo

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||A sequence of values. | | [`[Any]`](../../types/#seq) |
| `<output>` ||The selected value. | | [`Any`](../../types/#any) |
| `Label` |  | The text label of this combobox. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Index` |  | The index of the selected item. | `None` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar)[`None`](../../types/#none) |
| `Width` |  | The width of the button and menu. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `Style` |  | The text style. | `None` | [`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |

</div>

A drop-down selection menu with a label.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Combo/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Combo/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Combo/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Combo/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

