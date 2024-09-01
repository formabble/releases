---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# NaNTo0

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A float value or a sequence of float values to be checked for NaN. | | [`Float`](../../types/#float)[`[Float]`](../../types/#seq) |
| `Output ➡️` ||The input with any NaN values replaced by 0. | | [`Float`](../../types/#float)[`[Float]`](../../types/#seq) |

</div>

Replaces NaN (Not a Number) values in the input with 0. This shard can handle both single float values and sequences of float values.

--8<-- "includes/license.md"

