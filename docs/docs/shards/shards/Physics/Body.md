---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.Body

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the physics body created by this shard as a physics object that acts as an interface for other physics shard to interact with the body. | | [`Physics.Body`](../../types/#physics.body) |
| `Location` | :fontawesome-solid-circle-plus:{title="No"} No  | The initial location of the physics object. The variable provided in this parameter is also updated through the physics simulations conducted on this body. Vice versa, the body's location is also updated if the variable's value is changed. | `none` | [`Var(Float3)`](../../types/#contextvar) |
| `Rotation` | :fontawesome-solid-circle-plus:{title="No"} No  | The initial rotation of the physics object. The variable provided in this parameter is also updated through the physics simulations conducted on this body. Vice versa, the body's rotation is also updated if the variable's value is changed. | `none` | [`Var(Float4)`](../../types/#contextvar) |
| `Static` | :fontawesome-solid-circle-plus:{title="No"} No  | If false, the physics body will be destroyed when the shard is not activated. If true, the body will persist and be included in the physics simulation even if the shard is not activated. | `false` | [`Bool`](../../types/#bool) |
| `Enabled` | :fontawesome-solid-circle-plus:{title="No"} No  | Can be used to toggle the body on or off if it is a persistent body. If false, the body is temporarily removed from the simulation without destroying it. | `true` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `Shape` | :fontawesome-solid-circle-plus:{title="No"} No  | The shape of the body. | `none` | [`Var(Physics.Shape)`](../../types/#contextvar) |
| `Friction` | :fontawesome-solid-circle-plus:{title="No"} No  | The friction applied when this physics body is in contact with another physics body. | `0.2` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Restitution` | :fontawesome-solid-circle-plus:{title="No"} No  | The bounciness of the body when it collides with another physics body. | `0` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `LinearDamping` | :fontawesome-solid-circle-plus:{title="No"} No  | How much linear velocity decays over time. | `0.05` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `AngularDamping` | :fontawesome-solid-circle-plus:{title="No"} No  | How much angular velocity decays over time. | `0.05` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `MaxLinearVelocity` | :fontawesome-solid-circle-plus:{title="No"} No  | Max linear velocity | `500` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `MaxAngularVelocity` | :fontawesome-solid-circle-plus:{title="No"} No  | Max angular velocity | `47.1239` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `GravityFactor` | :fontawesome-solid-circle-plus:{title="No"} No  | The gravity factor applied to this body | `1` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `AllowedDOFs` | :fontawesome-solid-circle-plus:{title="No"} No  | The translation and rotation axes that the body is allowed to move and rotate around. | `PhysicsDOF::<invalid>` | [`PhysicsDOF`](../../../enums/PhysicsDOF)[`[PhysicsDOF]`](../../types/#seq)[`Var([PhysicsDOF])`](../../types/#contextvar) |
| `MotionType` | :fontawesome-solid-circle-plus:{title="No"} No  | Motion type of the body, Dynamic, Kinematic, or Static. | `PhysicsMotion::Dynamic` | [`PhysicsMotion`](../../../enums/PhysicsMotion)[`Var(PhysicsMotion)`](../../types/#contextvar) |
| `CollisionGroup` | :fontawesome-solid-circle-plus:{title="No"} No  | The collision group this body belongs to and which collision groups it is allowed to collide with. The first component in the int2 dictates collision group membership mask, the second part contains a filter mask. | `@i2(-1 -1)` | [`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar) |
| `Sensor` | :fontawesome-solid-circle-plus:{title="No"} No  | If true, this physics body will be considered a Sensor. Sensors only detect collisions but do not interact with collided objects (AKA triggers) | `false` | [`Bool`](../../types/#bool) |
| `Mass` | :fontawesome-solid-circle-plus:{title="No"} No  | Mass of the body. For mass less or equal to 0, default mass calculation is used instead. | `0` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Tag` | :fontawesome-solid-circle-plus:{title="No"} No  | Tag attached to this body for use in collision events. | `none` | [`Any`](../../types/#any) |
| `Context` | :fontawesome-solid-circle-plus:{title="No"} No  | The physics context object that is managing the physics simulation. | `Var: Physics.Context` | [`Var(Physics.Context)`](../../types/#contextvar) |

</div>

This shard creates a physics body, conducts physics simulations on this body while updating the relavent variables tied to this body, and creates an interface to allow other physics shards to interact with this body.

--8<-- "includes/license.md"

