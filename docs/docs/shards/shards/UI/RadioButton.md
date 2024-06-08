---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.RadioButton

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Indicates whether the radio button was clicked during this frame. | | [`Bool`](../../types/#bool) |
| `Label` | :fontawesome-solid-circle-plus:{title="No"}  | The text label of this radio button. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Variable` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The variable that holds the input value. | `None` | [`Any`](../../types/#any)[`&Any`](../../types/#contextvar) |
| `Value` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The value to compare with. | `None` | [`Any`](../../types/#any) |
| `Style` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The text style. | `None` | [`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |

</div>

A radio button for selecting a value amongst multiple choices.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/RadioButton/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/RadioButton/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/RadioButton/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/RadioButton/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

