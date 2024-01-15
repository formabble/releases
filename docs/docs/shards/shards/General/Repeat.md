---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Repeat

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The input will be passed to both the action and the `:Until` condition if used. | | [`Any`](../../types/#any) |
| `<output>` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Action` |  | The shards to repeat. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Times` |  | How many times we should repeat the action. | `0` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar) |
| `Forever` |  | If we should repeat the action forever. | `false` | [`Bool`](../../types/#bool) |
| `Until` |  | Optional shards to use as predicate to continue repeating until it's true | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

Repeat an action a given number of times or until a condition is no longer `true`.

--8<-- "includes/license.md"

