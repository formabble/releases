---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.Users

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||No input is required for this operation. | | [`None`](../../types/#none) |
| `Output ➡️` ||A copy of the network clients' data, retrieved from the latest frame. | | [`{count: Int username: String lfg: Int channel: Int}`](../../types/#table) |

</div>

Retrieves a copy of the network clients' data from the latest frame to avoid data races.

--8<-- "includes/license.md"

