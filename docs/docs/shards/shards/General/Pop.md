---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Pop

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Element popped from the sequence. | | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the variable. | `` | [`String`](../../types/#string)[`&Any`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The key of the value to read from the table (parameter applicable only if the target variable is a table). | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar)[`None`](../../types/#none) |
| `Global` | :fontawesome-solid-circle-plus:{title="No"} No  | If the variable is available to all of the wires in the same mesh. | `false` | [`Bool`](../../types/#bool) |

</div>

Pops (drops as well as passes as output) the last element of the sequence variable passed in the `:Name` parameter. Works only on sequences.

## Details

--8<-- "details/shards/General/Pop.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Pop/Pop.shs"
  ```

  ```
  --8<-- "samples/shards/General/Pop/Pop.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

