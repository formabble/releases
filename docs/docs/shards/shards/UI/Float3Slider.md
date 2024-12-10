---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Float3Slider

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value produced. | | [`Float3`](../../types/#float3) |
| `Label` | :fontawesome-solid-circle-plus:{title="No"} No  | The label for this widget. | `none` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Style` | :fontawesome-solid-circle-plus:{title="No"} No  | The text style. | `none` | [`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |
| `Variable` | :fontawesome-solid-circle-plus:{title="No"} No  | The variable that holds the input value. | `none` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `Min` | :fontawesome-solid-circle-plus:{title="No"} No  | The minimum value. | `none` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `Max` | :fontawesome-solid-circle-plus:{title="No"} No  | The maximum value. | `none` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |

</div>

A numeric slider.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Float3Slider/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Float3Slider/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

