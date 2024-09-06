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
| `FirstReferenceFrame` | :fontawesome-solid-circle-plus:{title="No"} No  | Body 1 constraint reference frame (space determined by Space) | `[@f4(1 0 0 0) @f4(0 1 0 0) @f4(0 0 1 0) @f4(0 0 0 1)]` | [`[Float4](4)`](../../types/#seq)[`Var([Float4](4))`](../../types/#contextvar) |
| `SecondReferenceFrame` | :fontawesome-solid-circle-plus:{title="No"} No  | Body 2 constraint reference frame (space determined by Space) | `[@f4(1 0 0 0) @f4(0 1 0 0) @f4(0 0 1 0) @f4(0 0 0 1)]` | [`[Float4](4)`](../../types/#seq)[`Var([Float4](4))`](../../types/#contextvar) |
| `AutoDetectPoint` | :fontawesome-solid-circle-plus:{title="No"} No  | When Space is WorldSpace FirstReferenceFrame and SecondReferenceFrame can be automatically calculated based on the positions of the bodies when the constraint is created (they will be fixated in their current relative position/orientation).  | `true` | [`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |

</div>



--8<-- "includes/license.md"

