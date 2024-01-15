---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Merge

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`{Any}`](../../types/#table) |
| `<output>` || | | [`{Any}`](../../types/#table) |
| `Target` |  | The table to merge into. | `None` | [`&{Any}`](../../types/#contextvar) |

</div>

--8<-- "includes/experimental.md"

Combine two tables into one, with the input table taking priority over the operand table, which will be written and returned as output. This shard is useful in scenarios where you need to merge data from different sources while keeping the priority of certain values.

--8<-- "includes/license.md"

