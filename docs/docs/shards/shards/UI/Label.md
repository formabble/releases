---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Label

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`String`](../../types/#string) |
| `Output ➡️` ||The resulting output of the shard | | [`String`](../../types/#string) |
| `Wrap` | :fontawesome-solid-circle-plus:{title="No"} No  | The text wrapping mode. | `TextWrap::Extend` | [`TextWrap`](../../../enums/TextWrap)[`Bool`](../../types/#bool) |
| `Style` | :fontawesome-solid-circle-plus:{title="No"} No  | The text style. | `None` | [`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar)[`None`](../../types/#none) |

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

