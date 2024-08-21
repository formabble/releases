---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Merge

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`{Any}`](../../types/#table) |
| `Output ➡️` ||The resulting output of the shard | | [`{Any}`](../../types/#table) |
| `Target` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The table to merge into. | `None` | [`Var({Any})`](../../types/#contextvar) |

</div>

Combine two tables into one, with the input table taking priority over the operand table, which will be written and returned as output. This shard is useful in scenarios where you need to merge data from different sources while keeping the priority of certain values.

--8<-- "includes/license.md"

