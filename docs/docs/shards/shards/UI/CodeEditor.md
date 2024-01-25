---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.CodeEditor

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value is ignored. | | [`None`](../../types/#none) |
| `<output>` ||The value produced when changed. | | [`Bool`](../../types/#bool) |
| `Code` |  | The variable that holds the code to edit. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Language` |  | The name of the programming language for syntax highlighting. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |

</div>

A TextField with support for highlighting.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/CodeEditor/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/CodeEditor/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

