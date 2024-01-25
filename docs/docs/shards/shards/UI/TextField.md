---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.TextField

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value is ignored. | | [`None`](../../types/#none) |
| `<output>` ||The value produced when changed. | | [`[Any]`](../../types/#seq) |
| `Variable` |  | The variable that holds the input value. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `JustifyWidth` |  | Whether to take up all available space for its desired width. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `Multiline` |  | Support multiple lines. | `false` | [`Bool`](../../types/#bool) |
| `Password` |  | Support multiple lines. | `false` | [`Bool`](../../types/#bool) |
| `Hint` |  | Hint to show in the text field. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |

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

