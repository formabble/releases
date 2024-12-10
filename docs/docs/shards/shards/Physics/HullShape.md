---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.HullShape

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||A GFX mesh or drawable object. | | [`GFX.Mesh`](../../types/#gfx.mesh)[`GFX.Drawable`](../../types/#gfx.drawable) |
| `Output ➡️` ||Outputs the created physics collisionshape. | | [`Physics.Shape`](../../types/#physics.shape) |
| `MaxConvexRadius` | :fontawesome-solid-circle-plus:{title="No"} No  | The convex radius given to the collision shape. A larger convex radius results in better performance but a less accurate simulation. A convex radius of 0 is allowed | `0.05` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |

</div>

Creates a physics shape from a GFX mesh or drawable input

--8<-- "includes/license.md"

