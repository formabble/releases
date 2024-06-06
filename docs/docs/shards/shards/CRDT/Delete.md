---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CRDT.Delete

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Bytes`](../../types/#bytes) |
| `CRDT` |  | The CRDT instance to delete from. | `None` | [`&Object`](../../types/#contextvar) |
| `Key` |  | The key to delete from the CRDT instance. | `None` | [`Any`](../../types/#any) |

</div>

Deletes the value at the specified key in the CRDT instance.

--8<-- "includes/license.md"

