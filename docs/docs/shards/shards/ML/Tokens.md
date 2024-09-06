---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ML.Tokens

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`String`](../../types/#string) |
| `Output ➡️` ||The resulting output of the shard | | [`[Int]`](../../types/#seq) |
| `Tokenizer` | :fontawesome-solid-circle-plus:{title="No"} No  | The tokenizer to use. | `none` | [`Var(Tokenizer)`](../../types/#contextvar) |
| `AddSpecialTokens` | :fontawesome-solid-circle-plus:{title="No"} No  | If true, add special tokens. | `true` | [`Bool`](../../types/#bool) |
| `AsTensor` | :fontawesome-solid-circle-plus:{title="No"} No  | Outputs a tensor object instead of an int sequence. | `false` | [`Bool`](../../types/#bool) |
| `Format` | :fontawesome-solid-circle-plus:{title="No"} No  | The format of the output tensor. If As Tensor is true. | `TensorType::U32` | [`TensorType`](../../../enums/TensorType) |
| `GPU` | :fontawesome-solid-circle-plus:{title="No"} No  | If true, the output tensor will be on the GPU (if ). | `false` | [`Bool`](../../types/#bool) |

</div>

Tokenizes text using a tokenizer.

--8<-- "includes/license.md"

