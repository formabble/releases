---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Map

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The sequence or table to process. | | [`[Any]`](../../types/#seq)[`{Any}`](../../types/#table) |
| `Output ➡️` ||The resulting processed sequence or table. | | [`[Any]`](../../types/#seq) |
| `Apply` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The function to apply to each item of the sequence or key-value pair of the table. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

Processes each element of a sequence or key-value pair of a table using the shards specified in the `Apply` parameter and returns the modified sequence or table. Note that this shard is able to use the $0 and $1 internal variables.

## Details

--8<-- "details/shards/General/Map.md"


--8<-- "includes/license.md"

