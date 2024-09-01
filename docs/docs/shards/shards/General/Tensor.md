---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Tensor

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`[Int]`](../../types/#seq)[`[Float]`](../../types/#seq) |
| `Output ➡️` ||The resulting output of the shard | | [`Object`](../../types/#object) |
| `Shape` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The shape of the tensor to create. If not provided, the shape will be inferred from the input. | `None` | [`[Int]`](../../types/#seq)[`Var([Int])`](../../types/#contextvar) |
| `Type` | :fontawesome-solid-circle-plus:{title="No"} No  | The data type of the tensor to create. If not provided, the data type will be inferred from the input. | `TensorType::F32` | [`TensorType`](../../../enums/TensorType) |
| `GPU` | :fontawesome-solid-circle-plus:{title="No"} No  | If true, the tensor will be created on the GPU (if available). | `false` | [`Bool`](../../types/#bool) |

</div>

Creates a tensor from a sequence (or nested sequences) of variables.

--8<-- "includes/license.md"

