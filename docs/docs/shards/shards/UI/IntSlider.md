---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.IntSlider

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value produced. | | [`Int`](../../types/#int) |
| `Label` | :fontawesome-solid-circle-plus:{title="No"} No  | The text label for this widget. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Style` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The text style. | `None` | [`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |
| `Variable` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The variable that holds the input value. | `None` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Min` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The minimum value. | `None` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Max` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The maximum value. | `None` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |

</div>

A numeric slider.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/IntSlider/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/IntSlider/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

