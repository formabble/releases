---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Push

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Input is the update value to be pushed into the variables. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"}  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"}  | The key of the value to write in the table (parameter applicable only if the target variable is a table). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"}  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |
| `Clear` | :fontawesome-solid-circle-plus:{title="No"}  | If we should clear this sequence at every wire iteration; works only if this is the first push; default: true. | `true` | [`Bool`](../../types/#bool) |

</div>

Updates sequences and tables by pushing elements and/or sequences into them.

## Details

--8<-- "details/shards/General/Push.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Push/Push.shs"
  ```

  ```
  --8<-- "samples/shards/General/Push/Push.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

