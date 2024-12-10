---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.DistanceConstraint

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
| `FirstPoint` | :fontawesome-solid-circle-plus:{title="No"} No  | The position of the connection point for the first body. | `@f3(0 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `SecondPoint` | :fontawesome-solid-circle-plus:{title="No"} No  | The position of the connection point for the second body. | `@f3(0 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar) |
| `MinDistance` | :fontawesome-solid-circle-plus:{title="No"} No  | Minimum distance between the two points. If the value is negative, it will be replaced by the distance between FirstPoint and SecondPoint (works only if Space is world space) | `-1` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `MaxDistance` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum distance between the two points. If the value is negative, it will be replaced by the distance between FirstPoint and SecondPoint (works only if Space is world space) | `-1` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `LimitSpring` | :fontawesome-solid-circle-plus:{title="No"} No  | When set, makes the limits soft | `{damping: 1 frequency: 0}` | [`None`](../../types/#none)[`{frequency: Float damping: Float}`](../../types/#table)[`{stiffness: Float damping: Float}`](../../types/#table)[`Var({frequency: Float damping: Float})`](../../types/#contextvar)[`Var({stiffness: Float damping: Float})`](../../types/#contextvar) |

</div>

This shard creates a tether between two bodies, keeping the distance between them within the range specified in the MinDistance and MaxDistance parameters.

--8<-- "includes/license.md"

