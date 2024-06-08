---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# SwitchTo

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the wire to switch to, or none to switch to the previous state. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none) |
| `Restart` | :fontawesome-solid-circle-plus:{title="No"} No  | If the wire should always (re)start from the beginning instead of resuming to whatever state was left. | `false` | [`Bool`](../../types/#bool) |
| `StopOnCleanup` | :fontawesome-solid-circle-plus:{title="No"} No  | If the wire should be stopped when the current wire is cleaned up. | `false` | [`Bool`](../../types/#bool) |

</div>

Switches to a given wire and suspends the current one. In other words, switches flow execution to another wire, useful to create state machines.

--8<-- "includes/license.md"

