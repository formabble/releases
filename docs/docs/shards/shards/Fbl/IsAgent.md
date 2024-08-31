---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fbl.IsAgent

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||Returns true if current user is an Agent and false otherwise. | | [`Bool`](../../types/#bool) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The additional agent name to check against. | `agent-007` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |

</div>

This shard checks if the current user running the code is an Agent. If the user is an Agent, it returns true and false otherwise. If an agent name was provided in the Name parameter, this shard will only return true if the current user is an Agent and also has the same specified name.

--8<-- "includes/license.md"

