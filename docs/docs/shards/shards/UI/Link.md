---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Link

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the Action shards of the link. | | [`Any`](../../types/#any) |
| `<output>` ||Indicates whether the link was clicked during this frame. | | [`Bool`](../../types/#bool) |
| `Label` |  | Optional label for the link. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Action` |  | The shards to execute when the link is clicked. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Style` |  | The text style. | `None` | [`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |

</div>

A clickable link.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Link/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Link/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Link/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Link/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

