---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Button

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the Action shards of the button. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Indicates whether the button was clicked during this frame. | | [`Bool`](../../types/#bool) |
| `Label` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The text label of this button. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Action` | :fontawesome-solid-circle-plus:{title="No"}  | The shards to execute when the button is pressed. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Style` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The text style. | `None` | [`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |
| `Wrap` | :fontawesome-solid-circle-plus:{title="No"}  | Wrap the text depending on the layout. | `None` | [`Bool`](../../types/#bool)[`None`](../../types/#none) |

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

