---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CRDT.Merge

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Into` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The CRDT instance to merge into. | `None` | [`&Object`](../../types/#contextvar) |
| `Other` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The other CRDT instance to merge. | `None` | [`&Object`](../../types/#contextvar) |

</div>

Merges two CRDT instances.

--8<-- "includes/license.md"

