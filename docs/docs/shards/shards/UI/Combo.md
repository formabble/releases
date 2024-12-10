---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Combo

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A sequence of values. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The selected value. | | [`Any`](../../types/#any) |
| `Label` | :fontawesome-solid-circle-plus:{title="No"} No  | The text label of this combobox. | `none` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Index` | :fontawesome-solid-circle-plus:{title="No"} No  | The index of the selected item. | `none` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Width` | :fontawesome-solid-circle-plus:{title="No"} No  | The width of the button and menu. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Style` | :fontawesome-solid-circle-plus:{title="No"} No  | The text style. | `none` | [`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |

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

