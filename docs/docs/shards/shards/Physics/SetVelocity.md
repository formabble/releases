---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.SetVelocity

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The physics body to overwrite the linear and/or angular velocity of. | | [`Physics.Body`](../../types/#physics.body) |
| `Output ➡️` ||Outputs the input physics body with the overwritten linear and/or angular velocity. | | [`Physics.Body`](../../types/#physics.body) |
| `Linear` | :fontawesome-solid-circle-plus:{title="No"} No  | The linear velocity to set | `none` | [`None`](../../types/#none)[`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `Angular` | :fontawesome-solid-circle-plus:{title="No"} No  | The angular velocity to set | `none` | [`None`](../../types/#none)[`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |

</div>

Overwrites the linear and/or angular velocity of the input physics body

--8<-- "includes/license.md"

