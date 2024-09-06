---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Limit

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input sequence to truncate. | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||The truncated sequence (or a single element if Max is 1). | | [`Any`](../../types/#any) |
| `Max` | :fontawesome-solid-circle-plus:{title="No"} No  | How many maximum elements to take from the input sequence. | `0` | [`Int`](../../types/#int) |

</div>

This shard truncates the input sequence to the specified number of elements(specified by the Max parameter) and outputs the truncated sequence.

## Details

--8<-- "details/shards/General/Limit.md"


--8<-- "includes/license.md"

