---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# GFX.DrawQueue

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`GFX.DrawQueue`](../../types/#gfx.drawqueue) |
| `AutoClear` |  | When enabled, automatically clears the queue after items have been rendered | `true` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Threaded` |  | When enabled, output uniuqe queue references to be able to use them with channels | `false` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Trace` |  | Enables debug tracing on this queue | `false` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>

--8<-- "includes/experimental.md"

Creates a new drawable queue to record Draw commands into

--8<-- "includes/license.md"

