---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Checkbox

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Indicates whether the checkbox state changed during this frame. | | [`Bool`](../../types/#bool) |
| `Label` | :fontawesome-solid-circle-plus:{title="No"} No  | The text label of this checkbox. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Variable` | :fontawesome-solid-circle-plus:{title="No"} No  | The variable that holds the input value. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `Style` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The text style. | `None` | [`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |

</div>

Boolean on/off widget with text label.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Checkbox/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Checkbox/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Checkbox/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Checkbox/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

