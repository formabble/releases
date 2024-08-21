---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CRDT.Set

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Bytes`](../../types/#bytes) |
| `CRDT` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The CRDT instance to edit. | `None` | [`Var(Object)`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The key to update in the CRDT instance. | `None` | [`Any`](../../types/#any) |

</div>

Updates or adds a value in the CRDT instance at the specified key, returning the updated CRDT.

--8<-- "includes/license.md"

