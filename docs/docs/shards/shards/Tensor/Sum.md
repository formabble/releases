---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Tensor.Sum

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Tensor`](../../types/#tensor) |
| `Output ➡️` ||The resulting output of the shard | | [`Tensor`](../../types/#tensor) |
| `Dims` | :fontawesome-solid-circle-plus:{title="No"} No  | The dimensions to sum over. If not provided, sum over all dimensions. | `none` | [`[Int]`](../../types/#seq)[`Var([Int])`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Computes the sum of tensor elements along the specified dimensions.

--8<-- "includes/license.md"

