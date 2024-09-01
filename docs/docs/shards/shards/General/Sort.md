---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Sort

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Output is the sorted sequence. | | [`[Any]`](../../types/#seq) |
| `From` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The name of the sequence variable to edit in place. | `None` | [`Var([Any])`](../../types/#contextvar) |
| `Join` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Other columns to join sort/filter using the input (they must be of the same length). | `None` | [`Var([Any])`](../../types/#contextvar)[`[Var([Any])]`](../../types/#seq) |
| `Desc` | :fontawesome-solid-circle-plus:{title="No"} No  | If sorting should be in descending order, defaults ascending. | `false` | [`Bool`](../../types/#bool) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to use to transform the collection's items before they are compared. Can be None. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

Sorts the elements of a sequence. Can also move around the elements of a joined sequence in alignment with the sorted sequence.

## Details

--8<-- "details/shards/General/Sort.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Sort/Sort.shs"
  ```

  ```
  --8<-- "samples/shards/General/Sort/Sort.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

