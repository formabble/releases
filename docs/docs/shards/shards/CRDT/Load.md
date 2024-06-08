---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CRDT.Load

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The resulting output of the shard | | [`Bytes`](../../types/#bytes) |
| `CRDT` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The CRDT instance to load into. | `None` | [`&Object`](../../types/#contextvar) |

</div>

Loads a serialized CRDT into a CRDT instance.

--8<-- "includes/license.md"

