---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.ApplyForce

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The physics body to apply the linear and/or angular force to. | | [`Physics.Body`](../../types/#physics.body) |
| `Output ➡️` ||Outputs the input physics body with the applied linear and/or angular force. | | [`Physics.Body`](../../types/#physics.body) |
| `Linear` | :fontawesome-solid-circle-plus:{title="No"} No  | The linear force to apply | `@f3(0 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `Angular` | :fontawesome-solid-circle-plus:{title="No"} No  | The angular force to apply | `@f3(0 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |

</div>

This shard applies a short instantaneous linear and/or angular force to the input physics body.

--8<-- "includes/license.md"

