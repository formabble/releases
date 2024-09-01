---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.DebugDraw

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Context` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The context | `None` | [`Var(Physics.Context)`](../../types/#contextvar) |
| `DrawConstraints` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw constraints | `true` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawConstraintLimits` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw constraint limits | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawConstraintReferenceFrames` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw constraint reference frames | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawBodies` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw bodies | `true` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawBodyGetSupportFunction` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the GetSupport() function, used for convex collision detection | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawBodySupportDirection` | :fontawesome-solid-circle-plus:{title="No"} No  | When drawing the support function, also draw which direction mapped to a specific support point | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawBodyGetSupportingFace` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the faces that were found colliding during collision detection | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawBodyShape` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the shapes of all bodies | `true` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawBodyShapeWireframe` | :fontawesome-solid-circle-plus:{title="No"} No  | When mDrawShape is true and this is true, the shapes will be drawn in wireframe instead of solid. | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawBodyShapeColor` | :fontawesome-solid-circle-plus:{title="No"} No  | Coloring scheme to use for shapes | `PhysicsDebugShapeColor::MotionTypeColor` | [`PhysicsDebugShapeColor`](../../../enums/PhysicsDebugShapeColor)[`Var(PhysicsDebugShapeColor)`](../../types/#contextvar) |
| `DrawBodyBoundingBox` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw a bounding box per body | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawBodyCenterOfMassTransform` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the center of mass for each body | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawBodyWorldTransform` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the world transform (which can be different than the center of mass) for each body | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawBodyVelocity` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the velocity vector for each body | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawBodyMassAndInertia` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the mass and inertia (as the box equivalent) for each body | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawBodySleepStats` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw stats regarding the sleeping algorithm of each body | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawSoftBodyVertices` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the vertices of soft bodies | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawSoftBodyVertexVelocities` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the velocities of the vertices of soft bodies | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawSoftBodyEdgeConstraints` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the edge constraints of soft bodies | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawSoftBodyBendConstraints` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the bend constraints of soft bodies | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawSoftBodyVolumeConstraints` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the volume constraints of soft bodies | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawSoftBodySkinConstraints` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the skin constraints of soft bodies | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawSoftBodyLRAConstraints` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the LRA constraints of soft bodies | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawSoftBodyPredictedBounds` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw the predicted bounds of soft bodies | `false` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `DrawSoftBodyConstraintColor` | :fontawesome-solid-circle-plus:{title="No"} No  | Coloring scheme to use for soft body constraints | `PhysicsDebugSoftBodyConstraintColor::ConstraintType` | [`PhysicsDebugSoftBodyConstraintColor`](../../../enums/PhysicsDebugSoftBodyConstraintColor)[`Var(PhysicsDebugSoftBodyConstraintColor)`](../../types/#contextvar) |

</div>



--8<-- "includes/license.md"

