---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CRDT.Set

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Bytes`](../../types/#bytes) |
| `CRDT` |  | The CRDT instance to edit. | `None` | [`&Object`](../../types/#contextvar) |
| `Key` |  | The key to update in the CRDT instance. | `None` | [`Any`](../../types/#any) |

</div>

Updates or adds a value in the CRDT instance at the specified key, returning the updated CRDT.

--8<-- "includes/license.md"

