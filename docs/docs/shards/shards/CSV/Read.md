---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CSV.Read

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A multiline string in CSV format. | | [`String`](../../types/#string) |
| `Output ➡️` ||A sequence of rows, with each row being a sequence of strings. | | [`[[String]]`](../../types/#seq) |
| `NoHeader` | :fontawesome-solid-circle-plus:{title="No"}  | Whether the shard should parse the first row as data, instead of header. | `false` | [`Bool`](../../types/#bool) |
| `Separator` | :fontawesome-solid-circle-plus:{title="No"}  | The character to use as fields separator. | `,` | [`String`](../../types/#string) |

</div>

Reads a CSV string and outputs the data as a sequence of strings in a sequence of rows.

--8<-- "includes/license.md"

