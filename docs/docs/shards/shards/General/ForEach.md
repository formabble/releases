---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ForEach

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Sequence/table whose elements or key-value pairs need to be processed. | | [`[Any]`](../../types/#seq)[`{Any}`](../../types/#table) |
| `<output>` ||The output from processing the sequence/table elements or key-value pairs. | | [`[Any]`](../../types/#seq)[`{Any}`](../../types/#table) |
| `Apply` |  | The processing logic (in the form of a shard or sequence of shards) to apply to the input sequence/table. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

--8<-- "includes/experimental.md"

Processes every element or key-value pair of a sequence/table with a given shard or sequence of shards.

--8<-- "includes/license.md"

