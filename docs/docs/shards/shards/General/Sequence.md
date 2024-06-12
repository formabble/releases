---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Sequence

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The key of the value to write in the table (parameter applicable only if the target variable is a table). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |
| `Clear` | :fontawesome-solid-circle-plus:{title="No"} No  | If we should clear this sequence at every wire iteration; works only if this is the first push; default: true. | `true` | [`Bool`](../../types/#bool) |
| `Type` | :fontawesome-solid-circle-plus:{title="No"} No  | The sequence type to forward declare. | `None` | [`None`](../../types/#none)[`Type`](../../types/#type) |

</div>

Creates an empty sequence (or sequence in a table if a key is passed). Useful to declare and specify types.

## Details

--8<-- "details/shards/General/Sequence.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Sequence/Sequence.shs"
  ```

  ```
  --8<-- "samples/shards/General/Sequence/Sequence.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

