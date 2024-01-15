---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CSV.Write

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||A sequence of rows, with each row being a sequence of strings. | | [`[[String]]`](../../types/#seq) |
| `<output>` ||A multiline string in CSV format. | | [`String`](../../types/#string) |
| `NoHeader` |  | Whether the shard should parse the first row as data, instead of header. | `false` | [`Bool`](../../types/#bool) |
| `Separator` |  | The character to use as fields separator. | `,` | [`String`](../../types/#string) |

</div>

Reads a sequence of strings in a sequence of rows and outputs the data as a CSV string.

--8<-- "includes/license.md"

