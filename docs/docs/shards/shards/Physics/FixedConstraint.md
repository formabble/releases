---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.FixedConstraint

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `FirstBody` | :fontawesome-solid-circle-plus:{title="No"} No  | The first body, keep unset to attach to the fixed world | `none` | [`Var(Physics.Body)`](../../types/#contextvar)[`None`](../../types/#none) |
| `SecondBody` | :fontawesome-solid-circle-plus:{title="No"} No  | The second body, keep unset to attach to the fixed world | `none` | [`Var(Physics.Body)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Static` | :fontawesome-solid-circle-plus:{title="No"} No  | Static node, persist when not activated | `false` | [`Bool`](../../types/#bool) |
| `Enabled` | :fontawesome-solid-circle-plus:{title="No"} No  | Can be used to toggle this node when it has static persistence | `true` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `Space` | :fontawesome-solid-circle-plus:{title="No"} No  | This determines in which space the constraint is setup, all other properties should be in the specified space | `ConstraintSpace::WorldSpace` | [`ConstraintSpace`](../../../enums/ConstraintSpace) |
| `FirstReferenceFrame` | :fontawesome-solid-circle-plus:{title="No"} No  | The rotation and position of the connection point for the first body. | `[@f4(1 0 0 0) @f4(0 1 0 0) @f4(0 0 1 0) @f4(0 0 0 1)]` | [`[Float4](4)`](../../types/#seq)[`Var([Float4](4))`](../../types/#contextvar) |
| `SecondReferenceFrame` | :fontawesome-solid-circle-plus:{title="No"} No  | The rotation and position of the connection point for the second body. | `[@f4(1 0 0 0) @f4(0 1 0 0) @f4(0 0 1 0) @f4(0 0 0 1)]` | [`[Float4](4)`](../../types/#seq)[`Var([Float4](4))`](../../types/#contextvar) |
| `AutoDetectPoint` | :fontawesome-solid-circle-plus:{title="No"} No  | When the Space parameter is set to World space, the connection points will be automatically set to the current rotation and position of the two bodies.  | `true` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |

</div>

This shard rigidly connects two physics bodies together. When forces are applied to either body, they react as if they were a single rigid object.

--8<-- "includes/license.md"

