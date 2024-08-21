---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CRDT.Get

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `CRDT` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The CRDT instance to read from. | `None` | [`Var(Object)`](../../types/#contextvar) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The key to read from the CRDT instance. | `None` | [`Any`](../../types/#any) |

</div>

Retrieves the value at the specified key in the CRDT instance.

--8<-- "includes/license.md"

