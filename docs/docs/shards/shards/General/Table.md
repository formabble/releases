---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Table

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The key of the value to write in the table (parameter applicable only if the target variable is a table). | `None` | [`Any`](../../types/#any) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |
| `Type` | :fontawesome-solid-circle-plus:{title="No"} No  | The table type to forward declare. | `None` | [`None`](../../types/#none)[`Type`](../../types/#type) |

</div>

Creates an empty table. Useful to declare and specify types.

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

