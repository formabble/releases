---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CSV.Write

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A sequence of rows, with each row being a sequence of strings. | | [`[[String]]`](../../types/#seq) |
| `Output ➡️` ||A multiline string in CSV format. | | [`String`](../../types/#string) |
| `NoHeader` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether the shard should parse the first row as data, instead of header. | `false` | [`Bool`](../../types/#bool) |
| `Separator` | :fontawesome-solid-circle-plus:{title="No"} No  | The character to use as fields separator. | `,` | [`String`](../../types/#string) |

</div>

Reads a sequence of strings in a sequence of rows and outputs the data as a CSV string.

--8<-- "includes/license.md"

