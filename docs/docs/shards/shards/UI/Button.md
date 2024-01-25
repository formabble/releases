---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Button

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Action shards of the button. | | [`Any`](../../types/#any) |
| `<output>` ||Indicates whether the button was clicked during this frame. | | [`Bool`](../../types/#bool) |
| `Label` |  | The text label of this button. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Action` |  | The shards to execute when the button is pressed. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Style` |  | The text style. | `None` | [`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |
| `Wrap` |  | Wrap the text depending on the layout. | `None` | [`Bool`](../../types/#bool)[`None`](../../types/#none) |

</div>

Clickable button with text.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Button/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Button/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Button/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Button/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

