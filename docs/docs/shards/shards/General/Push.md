---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Push

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value to push into the sequence. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the variable. | `` | [`String`](../../types/#string)[`Var(Any)`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The key of the value to write in the table (parameter applicable only if the target variable is a table). | `None` | [`Any`](../../types/#any) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |
| `Clear` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether to clear this sequence at every wire iteration. This only works if it's the first push. The default is true. | `true` | [`Bool`](../../types/#bool) |

</div>

Pushes a new value into a sequence variable. If the variable does not exist, it will be created.

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

