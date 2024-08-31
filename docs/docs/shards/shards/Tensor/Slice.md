---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Tensor.Slice

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Object`](../../types/#object) |
| `Output ➡️` ||The resulting output of the shard | | [`Object`](../../types/#object) |
| `Dim` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The dimension along which to slice the tensor. | `None` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Start` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The starting index of the slice. | `None` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `End` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The ending index of the slice (exclusive). | `None` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |

</div>

Slices a tensor along a specified dimension.

--8<-- "includes/license.md"

