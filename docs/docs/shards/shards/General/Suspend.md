---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Suspend

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The wire to suspend. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none)[`&Wire`](../../types/#contextvar) |

</div>

Pauses another wire. If no wire is given, pauses the current wire.

--8<-- "includes/license.md"

