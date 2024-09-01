---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.SoftBody

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Physics.Body`](../../types/#physics.body) |
| `Location` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The initial location, updated by physics simulation | `None` | [`Var(Float3)`](../../types/#contextvar) |
| `Rotation` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The initial location, updated by physics simulation | `None` | [`Var(Float4)`](../../types/#contextvar) |
| `Static` | :fontawesome-solid-circle-plus:{title="No"} No  | Static node, persist when not activated | `false` | [`Bool`](../../types/#bool) |
| `Enabled` | :fontawesome-solid-circle-plus:{title="No"} No  | Can be used to toggle this node when it has static persistence | `true` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `Shape` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The shape of the body | `None` | [`Var(Physics.SoftBodyShape)`](../../types/#contextvar) |
| `Friction` | :fontawesome-solid-circle-plus:{title="No"} No  |  | `0.2` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Restitution` | :fontawesome-solid-circle-plus:{title="No"} No  | Restitution coefficient | `0` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `LinearDamping` | :fontawesome-solid-circle-plus:{title="No"} No  | Linear damping coefficient | `0.05` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `MaxLinearVelocity` | :fontawesome-solid-circle-plus:{title="No"} No  | Max linear velocity | `500` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `GravityFactor` | :fontawesome-solid-circle-plus:{title="No"} No  | Gravity factor | `1` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Pressure` | :fontawesome-solid-circle-plus:{title="No"} No  | Pressure | `0` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `CollisionGroup` | :fontawesome-solid-circle-plus:{title="No"} No  | Collision filtering type (the first component contains group membership mask, the second part contains a filter mask)If any bits match the filter of the other, the two objects will collide | `@i2(-1 -1)` | [`Int2`](../../types/#int2)[`Var(Int2)`](../../types/#contextvar) |
| `Tag` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Tag for the body used in collision events | `None` | [`Any`](../../types/#any) |
| `Context` | :fontawesome-solid-circle-plus:{title="No"} No  | The physics context | `ContextVariable: Physics.Context` | [`Var(Physics.Context)`](../../types/#contextvar) |

</div>

Defines a new node

--8<-- "includes/license.md"

