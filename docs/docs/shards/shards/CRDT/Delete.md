---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CRDT.Delete

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Bytes`](../../types/#bytes) |
| `CRDT` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The CRDT instance to delete from. | `None` | [`&Object`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The key to delete from the CRDT instance. | `None` | [`Any`](../../types/#any) |

</div>

Deletes the value at the specified key in the CRDT instance.

--8<-- "includes/license.md"

