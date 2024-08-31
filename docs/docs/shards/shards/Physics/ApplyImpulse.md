---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.ApplyImpulse

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Physics.Body`](../../types/#physics.body) |
| `Output ➡️` ||The resulting output of the shard | | [`Physics.Body`](../../types/#physics.body) |
| `Linear` | :fontawesome-solid-circle-plus:{title="No"} No  | The linear force to apply | `@f3(0 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `Angular` | :fontawesome-solid-circle-plus:{title="No"} No  | The angular force to apply | `@f3(0 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |

</div>

Applies a force to the physics body

--8<-- "includes/license.md"

