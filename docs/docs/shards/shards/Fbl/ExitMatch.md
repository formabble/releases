---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.ExitMatch

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input value. The input is passed through unchanged. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input value, passed through unchanged. | | [`Any`](../../types/#any) |

</div>

Exits the current match mode, returning to edit or main mode. This shard should only be used when in match mode. Sends a message to the relay to communicate this change.

--8<-- "includes/license.md"

