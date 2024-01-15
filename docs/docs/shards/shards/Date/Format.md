---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Date.Format

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||An epoch timestamp (seconds after epoch). | | [`Int`](../../types/#int) |
| `<output>` ||A formatted readable string. | | [`String`](../../types/#string) |
| `Format` |  | The actual formatting string, see full docs: https://docs.rs/chrono/0.4.19/chrono/format/strftime/index.html#specifiers | `%a %b %e %T %Y` | [`String`](../../types/#string) |

</div>

--8<-- "includes/experimental.md"

Reads an epoch timestamps and formats it into a readable string.

--8<-- "includes/license.md"

