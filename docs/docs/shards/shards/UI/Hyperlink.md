---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Hyperlink

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The URL. | | [`String`](../../types/#string) |
| `Output ➡️` ||The output of this shard will be its input. | | [`String`](../../types/#string) |
| `Label` | :fontawesome-solid-circle-plus:{title="No"} No  | Optional label for the hyperlink. | `None` | [`String`](../../types/#string)[`None`](../../types/#none) |
| `Style` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The text style. | `None` | [`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |

</div>

A clickable hyperlink.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Hyperlink/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Hyperlink/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Hyperlink/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Hyperlink/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

