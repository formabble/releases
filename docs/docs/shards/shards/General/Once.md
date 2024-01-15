---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Once

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Action` |  | The shard or sequence of shards to execute. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Every` |  | The number of seconds to wait until repeating the action, if 0 the action will happen only once per wire flow execution. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |

</div>

Executes the shard or sequence of shards with the desired frequency in a wire flow execution.

--8<-- "includes/license.md"

