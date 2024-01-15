---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# SwitchTo

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Wire` |  | The name of the wire to switch to, or none to switch to the previous state. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none) |
| `Restart` |  | If the wire should always (re)start from the beginning instead of resuming to whatever state was left. | `false` | [`Bool`](../../types/#bool) |

</div>

--8<-- "includes/experimental.md"

Switches to a given wire and suspends the current one. In other words, switches flow execution to another wire, useful to create state machines.

--8<-- "includes/license.md"

