---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.KinematicBody

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`[Float4]`](../../types/#seq)[`[[Float4]]`](../../types/#seq) |
| `Shapes` | :fontawesome-solid-circle-plus:{title="No"} No  | The shape or shapes of this rigid body. | `None` | [`&Object`](../../types/#contextvar)[`&Object`](../../types/#contextvar)[`None`](../../types/#none) |
| `Position` | :fontawesome-solid-circle-plus:{title="No"} No  | The initial position of this rigid body. Can be updated in the case of a kinematic rigid body. | `(0 0 0)` | [`Float3`](../../types/#float3)[`&Float3`](../../types/#contextvar)[`[Float3]`](../../types/#seq)[`&[Float3]`](../../types/#contextvar) |
| `Rotation` | :fontawesome-solid-circle-plus:{title="No"} No  | The initial rotation of this rigid body. Either axis angles in radians Float3 or a quaternion Float4. Can be updated in the case of a kinematic rigid body. | `(0 0 0 1)` | [`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar)[`[Float4]`](../../types/#seq)[`&[Float4]`](../../types/#contextvar) |
| `Collision` | :fontawesome-solid-circle-plus:{title="No"} No  | Handle collisions with this object. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `SolverGroup` | :fontawesome-solid-circle-plus:{title="No"} No  | Solver group (Membership, Filter) pair for contact forces. | `None` | [`Int2`](../../types/#int2)[`&Int2`](../../types/#contextvar)[`None`](../../types/#none) |
| `CollisionGroup` | :fontawesome-solid-circle-plus:{title="No"} No  | Collision group (Membership, Filter) pair for collision events. | `None` | [`Int2`](../../types/#int2)[`&Int2`](../../types/#contextvar)[`None`](../../types/#none) |
| `Tag` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Tag attached to this collider | `None` | [`Any`](../../types/#any) |
| `Name` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The optional name of the variable that will be exposed to identify, apply forces (if dynamic) and control this rigid body. | `None` | [`&Any`](../../types/#contextvar) |

</div>

A kinematic rigid body that can be controlled by the user and interacts with the physics simulation.

--8<-- "includes/license.md"

