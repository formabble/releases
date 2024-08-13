---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Erase

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Indices` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | One or multiple indices to filter from a sequence. | `None` | [`Any`](../../types/#any)[`&Any`](../../types/#contextvar) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The key of the value to erase from the table (nested table). | `None` | [`Any`](../../types/#any) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is or should be available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |

</div>

Deletes an index or indices from a sequence or a key or keys from a table.

## Details

--8<-- "details/shards/General/Erase.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Erase/Erase.shs"
  ```

  ```
  --8<-- "samples/shards/General/Erase/Erase.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

