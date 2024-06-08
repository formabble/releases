---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Int4Slider

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value produced. | | [`Int4`](../../types/#int4) |
| `Label` | :fontawesome-solid-circle-plus:{title="No"}  | The label for this widget. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Style` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The text style. | `None` | [`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |
| `Variable` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The variable that holds the input value. | `None` | [`Int4`](../../types/#int4)[`&Int4`](../../types/#contextvar) |
| `Min` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The minimum value. | `None` | [`Int4`](../../types/#int4)[`&Int4`](../../types/#contextvar) |
| `Max` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The maximum value. | `None` | [`Int4`](../../types/#int4)[`&Int4`](../../types/#contextvar) |

</div>

A numeric slider.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Int4Slider/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Int4Slider/2.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

