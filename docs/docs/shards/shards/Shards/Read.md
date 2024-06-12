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
| `Json` | :fontawesome-solid-circle-plus:{title="No"} No  | Determines if the output should be a JSON AST string instead of binary. | `false` | [`Bool`](../../types/#bool) |
| `BasePath` | :fontawesome-solid-circle-plus:{title="No"} No  | The base path used when interpreting file references. | `.` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Reads the textual representation of a Shards program and outputs the binary or json AST representation.

--8<-- "includes/license.md"

