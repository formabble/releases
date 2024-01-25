---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Table

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Any input is ignored. | | [`Any`](../../types/#any) |
| `<output>` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Name` |  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` |  | The key of the value to write in the table (parameter applicable only if the target variable is a table). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Global` |  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |
| `Type` |  | The table type to forward declare. | `None` | [`None`](../../types/#none)[`Type`](../../types/#type) |

</div>

Creates an empty table.

## Details

--8<-- "details/shards/General/Table.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Table/Table.shs"
  ```

  ```
  --8<-- "samples/shards/General/Table/Table.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

