---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Shards.Read

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`String`](../../types/#string) |
| `<output>` || | | [`String`](../../types/#string)[`Bytes`](../../types/#bytes) |
| `Json` |  | If the output should be a json AST string instead of binary. | `None` | [`Bool`](../../types/#bool) |
| `BasePath` |  | The base path to use when interpreting file references. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Reads a Shards program and outputs a binary or json AST.

--8<-- "includes/license.md"

