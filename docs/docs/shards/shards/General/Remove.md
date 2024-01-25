---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Remove

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Any input is ignored. | | [`None`](../../types/#none) |
| `<output>` ||Output is the filtered sequence. | | [`[Any]`](../../types/#seq) |
| `From` |  | The name of the sequence variable to edit in place. | `None` | [`&[Any]`](../../types/#contextvar) |
| `Join` |  | Other columns to join sort/filter using the input (they must be of the same length). | `None` | [`&[Any]`](../../types/#contextvar)[`[&[Any]]`](../../types/#seq) |
| `Predicate` |  | The shards to use as predicate, if true the item will be popped from the sequence. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Unordered` |  | Turn on to remove items very quickly but will not preserve the sequence items order. | `false` | [`Bool`](../../types/#bool) |

</div>

Removes all elements from a sequence that match the given condition. Can also take these matched indices and remove corresponding elements from a joined sequence.

## Details

--8<-- "details/shards/General/Remove.md"


## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Remove/Remove.shs"
  ```

  ```
  --8<-- "samples/shards/General/Remove/Remove.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

