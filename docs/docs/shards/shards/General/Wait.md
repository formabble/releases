---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Wait

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Wire` |  | The wire to wait. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none)[`&Wire`](../../types/#contextvar) |
| `Passthrough` |  | The output of this shard will be its input. | `false` | [`Bool`](../../types/#bool) |
| `Timeout` |  | The optional amount of time in seconds to wait for the wire to complete, if the time elapses the wire will be stopped and the flow will fail with a timeout error. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Waits for another wire to complete before resuming execution of the current wire.

--8<-- "includes/license.md"

