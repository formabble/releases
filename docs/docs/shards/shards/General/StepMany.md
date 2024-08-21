---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# StepMany

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||This shard takes a sequence of values as input. Each value from the sequence is provided as input to its corresponding copy of the scheduled Wire. The total number of copies of the specified Wire scheduled, will be the same as the number of elements in the sequence provided. | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||This shard returns the output of all the scheduled copies in a sequence. (Note that the output of the copies of the specified Wire might change as their states progresses. Thus the Type of the of the output of this shard should always be checked or converted to the appropriate Type.) | | [`[Any]`](../../types/#seq) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The Wire to create copies of and progress concurrently. | `None` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Wire]`](../../types/#seq)[`[Shard]`](../../types/#seq)[`[[Shard]]`](../../types/#seq) |

</div>

This shard takes a sequence of values as input, schedules multiple copies of the specified Wire and progresses their states concurrently. This means that a pause in any copy of the specified Wire, will not pause the parent Wire's execution. Each value from the sequence is provided as input to its corresponding copy of the specified Wire. The shard then returns a sequence of values containing the output of all scheduled copies.

## Details

--8<-- "details/shards/General/StepMany.md"


--8<-- "includes/license.md"

