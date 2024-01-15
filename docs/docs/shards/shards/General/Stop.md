---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Stop

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Wire` |  | The wire to stop. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none)[`&Wire`](../../types/#contextvar) |
| `Passthrough` |  | The output of this shard will be its input. | `false` | [`Bool`](../../types/#bool) |

</div>

Stops another wire. If no wire is given, stops the current wire.

--8<-- "includes/license.md"

