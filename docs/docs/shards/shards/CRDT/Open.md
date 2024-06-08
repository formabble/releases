---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CRDT.Open

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`Object`](../../types/#object) |
| `ClientID` | :fontawesome-solid-circle-plus:{title="No"}  | The local client id. | `0` | [`Int16`](../../types/#int16)[`&Int16`](../../types/#contextvar)[`Bytes`](../../types/#bytes)[`&Bytes`](../../types/#contextvar) |

</div>

Opens an empty CRDT document, returning the CRDT instance.

--8<-- "includes/license.md"

