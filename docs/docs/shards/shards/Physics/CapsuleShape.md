---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.CapsuleShape

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Physics.Shape`](../../types/#physics.shape) |
| `HalfHeight` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Half the height of the capsule | `None` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Radius` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Radius of the capsule | `None` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |

</div>

Create a capsule centered around the origin with one sphere cap at (0, -HalfHeight, 0) and the other at (0, HalfHeight, 0)

--8<-- "includes/license.md"

