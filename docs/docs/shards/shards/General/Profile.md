---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Profile

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard will be provided as input to the shards in the Action parameter. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be the output of the shards in the Action parameter. | | [`Any`](../../types/#any) |
| `Action` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The action shards to profile. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Label` | :fontawesome-solid-circle-plus:{title="No"} No  | The label to print when outputting time data. | `<no label>` | [`String`](../../types/#string) |

</div>

This shard returns the amount of time(nanoseconds) it took to execute the shards provided in the Action parameter.

--8<-- "includes/license.md"

