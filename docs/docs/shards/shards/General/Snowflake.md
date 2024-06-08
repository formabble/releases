---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Snowflake

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`Int`](../../types/#int) |
| `MachineId` | :fontawesome-solid-circle-plus:{title="No"} No  | The machine ID, must be less than 32 | `0` | [`Int`](../../types/#int) |
| `NodeId` | :fontawesome-solid-circle-plus:{title="No"} No  | The node ID, must be less than 32 | `0` | [`Int`](../../types/#int) |

</div>

Creates a Snowflake ID.

--8<-- "includes/license.md"

