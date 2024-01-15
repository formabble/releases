---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Inputs.Detached

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Context` |  | The window context to attach to | `None` | [`&Object`](../../types/#contextvar) |
| `Input` |  | Runs detached on the input loop | `None` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Shard]`](../../types/#seq) |
| `Then` |  | Runs inline after data has been output from the Input callback | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Priority` |  | The order in which this input handler is run | `0` | [`Int`](../../types/#int) |
| `Name` |  | Name used for logging/debugging purposes | `None` | [`None`](../../types/#none)[`String`](../../types/#string) |

</div>

--8<-- "includes/experimental.md"

Runs the contents on the input thread, and it's continuation on the current thread with the last data from the input thread

--8<-- "includes/license.md"

