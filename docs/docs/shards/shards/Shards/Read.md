---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Shards.Read

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`String`](../../types/#string) |
| `Output ➡️` ||The resulting output of the shard | | [`String`](../../types/#string)[`Bytes`](../../types/#bytes) |
| `Json` | :fontawesome-solid-circle-xmark:{title="Yes"}  | If the output should be a json AST string instead of binary. | `None` | [`Bool`](../../types/#bool) |
| `BasePath` | :fontawesome-solid-circle-plus:{title="No"}  | The base path to use when interpreting file references. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Reads a Shards program and outputs a binary or json AST.

--8<-- "includes/license.md"

