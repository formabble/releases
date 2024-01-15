---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# TryMany

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`[Any]`](../../types/#seq) |
| `<output>` || | | [`[Any]`](../../types/#seq) |
| `Wire` |  | The wire to spawn and try to run many times concurrently. | `None` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Shard]`](../../types/#seq) |
| `Policy` |  | The execution policy in terms of wires success. | `WaitUntil.AllSuccess` | [`WaitUntil`](../../../enums/WaitUntil) |
| `Threads` |  | The number of cpu threads to use. | `0` | [`Int`](../../types/#int) |

</div>



--8<-- "includes/license.md"

