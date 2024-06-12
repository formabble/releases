---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.WaitMatch

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input value. The input is passed through unchanged. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Players` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of players to wait for | `2` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar) |

</div>

Waits for a specified number of players to be ready for a match. Sends a request to the relay to wait for a match with the specified number of players. This operation can be canceled if the channel state changes to LocalSandbox or Main from certain conditions.

--8<-- "includes/license.md"

