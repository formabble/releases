---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Last

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A table or sequence to get the last element from. | | [`[Any]`](../../types/#seq)[`{Any}`](../../types/#table) |
| `Output ➡️` ||For sequences: the last value. For tables: a [key, value] pair. Returns None if input is empty. | | [`Any`](../../types/#any) |

</div>

Returns the last element from a sorted table or sequence. For tables, returns a [key, value] pair. Returns None if empty. Note: This operation is fast but unsafe unless the output is cloned (using Set instead of Ref) when combined with await or suspended wire flow.

--8<-- "includes/license.md"

