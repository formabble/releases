---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Inputs.MatchModifier

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Returns a boolean value: true if any of the specified modifier keys are currently pressed down and false otherwise. | | [`Bool`](../../types/#bool) |
| `Modifiers` | :fontawesome-solid-circle-plus:{title="No"} No  | Sequence of Modifier keys to check for such as Modifier::Shift, Modifier::Alt, Modifier::Primary and Modifier::Secondary. | `None` | [`None`](../../types/#none)[`[ModifierKey]`](../../types/#seq) |

</div>

This shard returns true if any of the modifier keys in the sequence provided in the Modifier parameter are currently pressed down, and false otherwise.

--8<-- "includes/license.md"

