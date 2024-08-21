---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CRDT.Apply

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The resulting output of the shard | | [`Bytes`](../../types/#bytes) |
| `CRDT` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The CRDT instance to apply the operation to. | `None` | [`Var(Object)`](../../types/#contextvar) |

</div>

Applies an operation to a CRDT instance.

--8<-- "includes/license.md"

