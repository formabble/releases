---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Sort

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Any input is ignored. | | [`None`](../../types/#none) |
| `<output>` ||Output is the sorted sequence. | | [`[Any]`](../../types/#seq) |
| `From` |  | The name of the sequence variable to edit in place. | `None` | [`&[Any]`](../../types/#contextvar) |
| `Join` |  | Other columns to join sort/filter using the input (they must be of the same length). | `None` | [`&[Any]`](../../types/#contextvar)[`[&[Any]]`](../../types/#seq) |
| `Desc` |  | If sorting should be in descending order, defaults ascending. | `false` | [`Bool`](../../types/#bool) |
| `Key` |  | The shards to use to transform the collection's items before they are compared. Can be None. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

Sorts the elements of a sequence. Can also move around the elements of a joined sequence in alignment with the sorted sequence.

## Details

--8<-- "details/shards/General/Sort.md"


--8<-- "includes/license.md"

