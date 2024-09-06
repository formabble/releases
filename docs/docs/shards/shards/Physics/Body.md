---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.Body

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Physics.Body`](../../types/#physics.body) |
| `Location` | :fontawesome-solid-circle-plus:{title="No"} No  | The initial location, updated by physics simulation | `none` | [`Var(Float3)`](../../types/#contextvar) |
| `Rotation` | :fontawesome-solid-circle-plus:{title="No"} No  | The initial location, updated by physics simulation | `none` | [`Var(Float4)`](../../types/#contextvar) |
| `Static` | :fontawesome-solid-circle-plus:{title="No"} No  | Static node, persist when not activated | `false` | [`Bool`](../../types/#bool) |
| `Enabled` | :fontawesome-solid-circle-plus:{title="No"} No  | Can be used to toggle this node when it has static persistence | `true` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `Shape` | :fontawesome-solid-circle-plus:{title="No"} No  | The shape of the body | `none` | [`Var(Physics.Shape)`](../../types/#contextvar) |
| `Friction` | :fontawesome-solid-circle-plus:{title="No"} No  |  | `0.2` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Restitution` | :fontawesome-solid-circle-plus:{title="No"} No  | Restitution coefficient | `0` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `LinearDamping` | :fontawesome-solid-circle-plus:{title="No"} No  | Linear damping coefficient | `0.05` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `AngularDamping` | :fontawesome-solid-circle-plus:{title="No"} No  | Angular damping coefficient | `0.05` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `MaxLinearVelocity` | :fontawesome-solid-circle-plus:{title="No"} No  | Max linear velocity | `500` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `MaxAngularVelocity` | :fontawesome-solid-circle-plus:{title="No"} No  | Max angular velocity | `47.1239` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `GravityFactor` | :fontawesome-solid-circle-plus:{title="No"} No  | Gravity factor | `1` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `AllowedDOFs` | :fontawesome-solid-circle-plus:{title="No"} No  | Allowed degrees of freedom | `PhysicsDOF::<invalid>` | [`PhysicsDOF`](../../../enums/PhysicsDOF)[`[PhysicsDOF]`](../../types/#seq)[`Var([PhysicsDOF])`](../../types/#contextvar) |
| `MotionType` | :fontawesome-solid-circle-plus:{title="No"} No  | Motion type | `PhysicsMotion::Dynamic` | [`PhysicsMotion`](../../../enums/PhysicsMotion)[`Var(PhysicsMotion)`](../../types/#contextvar) |
| `CollisionGroup` | :fontawesome-solid-circle-plus:{title="No"} No  | Collision filtering type (the first component contains group membership mask, the second part contains a filter mask)If any bits match the filter of the other, the two objects will collide | `@i2(-1 -1)` | [`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar) |
| `Sensor` | :fontawesome-solid-circle-plus:{title="No"} No  | Sensors only detect collisions but do not interact with collided objects (AKA triggers) | `false` | [`Bool`](../../types/#bool) |
| `Mass` | :fontawesome-solid-circle-plus:{title="No"} No  | Mass of the body, <= 0 uses default mass calculation | `0` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Tag` | :fontawesome-solid-circle-plus:{title="No"} No  | Tag for the body used in collision events | `none` | [`Any`](../../types/#any) |
| `Context` | :fontawesome-solid-circle-plus:{title="No"} No  | The physics context | `Var: Physics.Context` | [`Var(Physics.Context)`](../../types/#contextvar) |

</div>

Defines a new node

--8<-- "includes/license.md"

