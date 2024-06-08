---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Peek

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"}  | The wire to run. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none) |

</div>

Verifies if another wire has finished processing. Returns the wire's output if complete, or None if still in progress.

--8<-- "includes/license.md"

