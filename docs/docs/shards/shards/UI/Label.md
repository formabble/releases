---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Label

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The text to display. | | [`String`](../../types/#string) |
| `<output>` ||The output of this shard will be its input. | | [`String`](../../types/#string) |
| `Wrap` |  | Wrap the text depending on the layout. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `Style` |  | The text style. | `None` | [`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |

</div>

Static text.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Label/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Label/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Label/3.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Label/3.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Label/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Label/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

