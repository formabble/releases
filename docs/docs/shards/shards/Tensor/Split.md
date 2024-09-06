---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Tensor.Split

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Tensor`](../../types/#tensor) |
| `Output ➡️` ||The resulting output of the shard | | [`[Tensor]`](../../types/#seq) |
| `Dim` | :fontawesome-solid-circle-plus:{title="No"} No  | The dimension along which to split the tensor. Default is 0. | `0` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Size` | :fontawesome-solid-circle-plus:{title="No"} No  | The size of the sections to split the tensor into. | `none` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |

</div>

Splits a tensor into multiple tensors along a specified dimension.

--8<-- "includes/license.md"

