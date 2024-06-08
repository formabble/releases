---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Remove

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Output is the filtered sequence. | | [`[Any]`](../../types/#seq) |
| `From` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The name of the sequence variable to edit in place. | `None` | [`&[Any]`](../../types/#contextvar) |
| `Join` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Other columns to join sort/filter using the input (they must be of the same length). | `None` | [`&[Any]`](../../types/#contextvar)[`[&[Any]]`](../../types/#seq) |
| `Predicate` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The shards to use as predicate, if true the item will be popped from the sequence. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Unordered` | :fontawesome-solid-circle-plus:{title="No"}  | Turn on to remove items very quickly but will not preserve the sequence items order. | `false` | [`Bool`](../../types/#bool) |

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

