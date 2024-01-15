---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.DynamicBody

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`[Float4]`](../../types/#seq)[`[[Float4]]`](../../types/#seq) |
| `Shapes` |  | The shape or shapes of this rigid body. | `None` | [`&Object`](../../types/#contextvar)[`&Object`](../../types/#contextvar)[`None`](../../types/#none) |
| `Position` |  | The initial position of this rigid body. Can be updated in the case of a kinematic rigid body. | `(0 0 0)` | [`Float3`](../../types/#float3)[`&Float3`](../../types/#contextvar)[`[Float3]`](../../types/#seq)[`&[Float3]`](../../types/#contextvar) |
| `Rotation` |  | The initial rotation of this rigid body. Either axis angles in radians Float3 or a quaternion Float4. Can be updated in the case of a kinematic rigid body. | `(0 0 0 1)` | [`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar)[`[Float4]`](../../types/#seq)[`&[Float4]`](../../types/#contextvar) |
| `Collision` |  | Handle collisions with this object. | `None` | [`None`](../../types/#none)[`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `SolverGroup` |  | Solver group (Membership, Filter) pair for contact forces. | `None` | [`Int2`](../../types/#int2)[`&Int2`](../../types/#contextvar)[`None`](../../types/#none) |
| `CollisionGroup` |  | Collision group (Membership, Filter) pair for collision events. | `None` | [`Int2`](../../types/#int2)[`&Int2`](../../types/#contextvar)[`None`](../../types/#none) |
| `Tag` |  | Tag attached to this collider | `None` | [`Any`](../../types/#any) |
| `Name` |  | The optional name of the variable that will be exposed to identify, apply forces (if dynamic) and control this rigid body. | `None` | [`&Any`](../../types/#contextvar) |
| `AllowTranslation` |  | Translation contraints for this object [x y z]. | `None` | [`None`](../../types/#none)[`[Bool]`](../../types/#seq) |
| `AllowRotation` |  | Rotation contraints for this object [x y z]. | `None` | [`None`](../../types/#none)[`[Bool]`](../../types/#seq) |

</div>



--8<-- "includes/license.md"

