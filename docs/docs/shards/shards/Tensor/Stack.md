---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Tensor.Stack

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`[Object]`](../../types/#seq) |
| `Output ➡️` ||The resulting output of the shard | | [`Object`](../../types/#object) |
| `Dim` | :fontawesome-solid-circle-plus:{title="No"} No  | The dimension along which to stack the tensors. Default is 0. | `0` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

Stacks a sequence of tensors along a new axis.

--8<-- "includes/license.md"

