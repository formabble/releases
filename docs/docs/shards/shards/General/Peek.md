---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Peek

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Wire` |  | The wire to run. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"

Verifies if another wire has finished processing. Returns the wire's output if complete, or None if still in progress.

--8<-- "includes/license.md"

