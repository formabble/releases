---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Tensor.Slice

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Tensor`](../../types/#tensor) |
| `Output ➡️` ||The resulting output of the shard | | [`Tensor`](../../types/#tensor) |
| `Dim` | :fontawesome-solid-circle-plus:{title="No"} No  | The dimension along which to slice the tensor. | `none` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Start` | :fontawesome-solid-circle-plus:{title="No"} No  | The starting index of the slice. | `none` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `End` | :fontawesome-solid-circle-plus:{title="No"} No  | The ending index of the slice (exclusive). | `none` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |

</div>

Slices a tensor along a specified dimension.

--8<-- "includes/license.md"

