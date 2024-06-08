---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Int2Slider

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value produced. | | [`Int2`](../../types/#int2) |
| `Label` | :fontawesome-solid-circle-plus:{title="No"} No  | The label for this widget. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Style` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The text style. | `None` | [`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |
| `Variable` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The variable that holds the input value. | `None` | [`Int2`](../../types/#int2)[`&Int2`](../../types/#contextvar) |
| `Min` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The minimum value. | `None` | [`Int2`](../../types/#int2)[`&Int2`](../../types/#contextvar) |
| `Max` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The maximum value. | `None` | [`Int2`](../../types/#int2)[`&Int2`](../../types/#contextvar) |

</div>

A numeric slider.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Int2Slider/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Int2Slider/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

