---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.RestoreState

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The UI state to restore to represented as a byte sequence. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The output of this shard will be its input passed through unchanged. | | [`Bytes`](../../types/#bytes) |

</div>

This shard restores the UI to a previously saved state (provided as input as a byte sequence).

--8<-- "includes/license.md"

