---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.SetPose

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The physics body to overwrite the position and/or rotation of. | | [`Physics.Body`](../../types/#physics.body) |
| `Output ➡️` ||Outputs the input physics body with the overwritten position and/or rotation. | | [`Physics.Body`](../../types/#physics.body) |
| `Linear` | :fontawesome-solid-circle-plus:{title="No"} No  | The position to set | `none` | [`None`](../../types/#none)[`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `Angular` | :fontawesome-solid-circle-plus:{title="No"} No  | The rotation to set | `none` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar) |

</div>

Overwrites the position and/or rotation of the input physics body.

--8<-- "includes/license.md"

