---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.FloatSlider

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value produced. | | [`Float`](../../types/#float) |
| `Label` | :fontawesome-solid-circle-plus:{title="No"} No  | The text label for this widget. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Style` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The text style. | `None` | [`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |
| `Variable` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The variable that holds the input value. | `None` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Min` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The minimum value. | `None` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Max` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The maximum value. | `None` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |

</div>

A numeric slider.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/FloatSlider/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/FloatSlider/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

