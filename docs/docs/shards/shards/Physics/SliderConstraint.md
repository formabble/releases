---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.SliderConstraint

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `FirstBody` | :fontawesome-solid-circle-plus:{title="No"} No  | The first body, keep unset to attach to the fixed world | `none` | [`Var(Physics.Body)`](../../types/#contextvar)[`None`](../../types/#none) |
| `SecondBody` | :fontawesome-solid-circle-plus:{title="No"} No  | The second body, keep unset to attach to the fixed world | `none` | [`Var(Physics.Body)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Static` | :fontawesome-solid-circle-plus:{title="No"} No  | Static node, persist when not activated | `false` | [`Bool`](../../types/#bool) |
| `Enabled` | :fontawesome-solid-circle-plus:{title="No"} No  | Can be used to toggle this node when it has static persistence | `true` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `Space` | :fontawesome-solid-circle-plus:{title="No"} No  | This determines in which space the constraint is setup, all other properties should be in the specified space | `ConstraintSpace::LocalToBodyCOM` | [`ConstraintSpace`](../../../enums/ConstraintSpace) |
| `FirstPoint` | :fontawesome-solid-circle-plus:{title="No"} No  | Body 1 constraint reference frame (space determined by Space) | `@f3(0 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `SecondPoint` | :fontawesome-solid-circle-plus:{title="No"} No  | Body 2 constraint reference frame (space determined by Space) | `@f3(0 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `SliderAxis` | :fontawesome-solid-circle-plus:{title="No"} No  | Axis along which movement is possible (direction) | `@f3(1 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `NormalAxis` | :fontawesome-solid-circle-plus:{title="No"} No  | Perpendicular vector to define the frame | `@f3(0 1 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `LimitsMin` | :fontawesome-solid-circle-plus:{title="No"} No  | Minimum limit of movement | `1.17549e-38` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `LimitsMax` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum limit of movement | `3.40282e+38` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `LimitSpring` | :fontawesome-solid-circle-plus:{title="No"} No  | When set, makes the limits soft | `{damping: 1 frequency: 0}` | [`None`](../../types/#none)[`{frequency: Float damping: Float}`](../../types/#table)[`{stiffness: Float damping: Float}`](../../types/#table)[`Var({frequency: Float damping: Float})`](../../types/#contextvar)[`Var({stiffness: Float damping: Float})`](../../types/#contextvar) |
| `MaxFrictionForce` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum amount of friction force to apply (N) when not driven by a motor | `0` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `MotorSettings` | :fontawesome-solid-circle-plus:{title="No"} No  | Motor settings around the sliding axis | `{maxForceLimit: 3.40282e+38 maxTorqueLimit: 3.40282e+38 minForceLimit: 1.17549e-38 minTorqueLimit: 1.17549e-38}` | [`None`](../../types/#none)[`{minForceLimit: Float maxForceLimit: Float minTorqueLimit: Float maxTorqueLimit: Float}`](../../types/#table)[`Var({minForceLimit: Float maxForceLimit: Float minTorqueLimit: Float maxTorqueLimit: Float})`](../../types/#contextvar) |
| `MotorSpringSettings` | :fontawesome-solid-circle-plus:{title="No"} No  | Motor settings around the sliding axis | `{damping: 1 frequency: 0}` | [`None`](../../types/#none)[`{frequency: Float damping: Float}`](../../types/#table)[`{stiffness: Float damping: Float}`](../../types/#table)[`Var({frequency: Float damping: Float})`](../../types/#contextvar)[`Var({stiffness: Float damping: Float})`](../../types/#contextvar) |

</div>



--8<-- "includes/license.md"

