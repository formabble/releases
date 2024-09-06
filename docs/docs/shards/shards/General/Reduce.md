---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Reduce

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The sequence to reduce. | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||The resulting value after applying the operation to each item of the sequence. | | [`Any`](../../types/#any) |
| `Apply` | :fontawesome-solid-circle-plus:{title="No"} No  | The function to apply to each item of the sequence. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

Reduces a sequence to a single value by applying a an operation(specified in the Apply parameter) to each item of the sequence. Note that this shard is able to use the $0 internal variable.

## Details

--8<-- "details/shards/General/Reduce.md"


--8<-- "includes/license.md"

