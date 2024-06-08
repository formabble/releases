---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.TextField

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||The value produced when changed. | | [`[Any]`](../../types/#seq) |
| `Variable` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The variable that holds the input value. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `JustifyWidth` | :fontawesome-solid-circle-plus:{title="No"}  | Whether to take up all available space for its desired width. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `Multiline` | :fontawesome-solid-circle-plus:{title="No"}  | Support multiple lines. | `false` | [`Bool`](../../types/#bool) |
| `Password` | :fontawesome-solid-circle-plus:{title="No"}  | Support multiple lines. | `false` | [`Bool`](../../types/#bool) |
| `Hint` | :fontawesome-solid-circle-plus:{title="No"}  | Hint to show in the text field. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

A widget where text can be entered.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/TextField/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/TextField/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/TextField/3.shs"
  ```

  ```
  --8<-- "samples/shards/UI/TextField/3.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/TextField/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/TextField/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

