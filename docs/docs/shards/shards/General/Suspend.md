---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Suspend

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input value will pass through unchanged. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The wire to pause. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none)[`Var(Wire)`](../../types/#contextvar) |

</div>

Pauses a specified Wire's execution. If no Wire is specified, pauses the current wire.

--8<-- "includes/license.md"

