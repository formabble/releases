---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# DoMany

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||This shard takes a sequence of values as input. Each value from the sequence is provided as input to its corresponding copy of the scheduled Wire. The total number of copies of the specified Wire scheduled, will be the same as the number of elements in the sequence provided. | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||This shard returns the output of all the scheduled copies in a sequence. | | [`[Any]`](../../types/#seq) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The wire to run many times sequentially. | `None` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Shard]`](../../types/#seq) |
| `ComposeSync` | :fontawesome-solid-circle-plus:{title="No"} No  | Compose new wires synchronously. | `false` | [`Bool`](../../types/#bool) |

</div>

This shard takes a sequence of values as input, schedules multiple copies of a specified Wire and executes them sequentially. Each value from the sequence is provided as input to its corresponding copy of the specified Wire. The shard then returns a sequence of values containing the output of all copies of the specified Wire.

## Details

--8<-- "details/shards/General/DoMany.md"


--8<-- "includes/license.md"

