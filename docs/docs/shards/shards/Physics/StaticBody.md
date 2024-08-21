---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.StaticBody

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Shapes` | :fontawesome-solid-circle-plus:{title="No"} No  | The shape or shapes of this rigid body. | `None` | [`Var(Object)`](../../types/#contextvar)[`Var(Object)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Position` | :fontawesome-solid-circle-plus:{title="No"} No  | The initial position of this rigid body. Can be updated in the case of a kinematic rigid body. | `@f3(0 0 0)` | [`Float3`](../../types/#float3)[`Var(Float3)`](../../types/#contextvar)[`[Float3]`](../../types/#seq)[`Var([Float3])`](../../types/#contextvar) |
| `Rotation` | :fontawesome-solid-circle-plus:{title="No"} No  | The initial rotation of this rigid body. Either axis angles in radians Float3 or a quaternion Float4. Can be updated in the case of a kinematic rigid body. | `@f4(0 0 0 1)` | [`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar)[`[Float4]`](../../types/#seq)[`Var([Float4])`](../../types/#contextvar) |
| `Collision` | :fontawesome-solid-circle-plus:{title="No"} No  | Handle collisions with this object. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `SolverGroup` | :fontawesome-solid-circle-plus:{title="No"} No  | Solver group (Membership, Filter) pair for contact forces. | `None` | [`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar)[`None`](../../types/#none) |
| `CollisionGroup` | :fontawesome-solid-circle-plus:{title="No"} No  | Collision group (Membership, Filter) pair for collision events. | `None` | [`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Tag` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Tag attached to this collider | `None` | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The optional name of the variable that will be exposed to identify, apply forces (if dynamic) and control this rigid body. | `None` | [`Var(Any)`](../../types/#contextvar) |

</div>

A static rigid body that does not move.

--8<-- "includes/license.md"

