---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# RLimit

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input sequence to truncate. | | [`[Any]`](../../types/#seq) |
| `Output ➡️` ||The truncated sequence containing the last 'Max' elements, or a single element if Max is 1. | | [`Any`](../../types/#any) |
| `Max` | :fontawesome-solid-circle-plus:{title="No"} No  | The maximum number of elements to take from the end of the input sequence. | `0` | [`Int`](../../types/#int) |

</div>

This shard truncates the input sequence to the last specified number of elements (Max) and outputs the truncated sequence. If Max is set to 1, it outputs a single element.

--8<-- "includes/license.md"

