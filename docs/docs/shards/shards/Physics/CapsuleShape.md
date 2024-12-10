---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.CapsuleShape

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the created capsule collision shape. | | [`Physics.Shape`](../../types/#physics.shape) |
| `HalfHeight` | :fontawesome-solid-circle-plus:{title="No"} No  | Half the height of the capsule. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Radius` | :fontawesome-solid-circle-plus:{title="No"} No  | Radius of the capsule. | `none` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |

</div>

This shard creates a capsule physics collision shape, using the height and radius provided in the HalfHeight and Radius parameters respectively. The capsule will be centered around the origin with one sphere cap at (0, -HalfHeight, 0) and the other at (0, HalfHeight, 0).

--8<-- "includes/license.md"

