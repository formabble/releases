---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CRDT.State

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`Bytes`](../../types/#bytes) |
| `CRDT` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The CRDT instance to extract the state from. | `None` | [`Var(Object)`](../../types/#contextvar) |

</div>

Extracts the whole state of the CRDT as a state vector.

--8<-- "includes/license.md"

