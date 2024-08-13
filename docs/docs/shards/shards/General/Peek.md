---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Peek

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||This shard either returns none if the peeked Wire is still in progress, or the peeked Wire's output if it has ended. | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The wire to check. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none)[`&Wire`](../../types/#contextvar) |

</div>

Checks if another Wire has ended (Note that a looped Wire will never end). Returns the Wire's output if it has ended, or none if it is still in progress.

--8<-- "includes/license.md"

