---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Date.Format

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||An epoch timestamp (seconds after epoch). | | [`Int`](../../types/#int) |
| `Output ➡️` ||A formatted readable string. | | [`String`](../../types/#string) |
| `Format` | :fontawesome-solid-circle-plus:{title="No"} No  | The actual formatting string, see full docs: https://docs.rs/chrono/0.4.19/chrono/format/strftime/index.html#specifiers | `%a %b %e %T %Y` | [`String`](../../types/#string) |

</div>

Reads an epoch timestamps and formats it into a readable string.

--8<-- "includes/license.md"

