---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ML.DetokenizeWithTimestamps

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`[Int]`](../../types/#seq)[`Tensor`](../../types/#tensor) |
| `Output ➡️` ||The resulting output of the shard | | [`String`](../../types/#string) |
| `Tokenizer` | :fontawesome-solid-circle-plus:{title="No"} No  | The tokenizer to use for detokenization. | `none` | [`Var(Tokenizer)`](../../types/#contextvar) |

</div>

Converts token IDs back into text segments with timestamps using a tokenizer.

--8<-- "includes/license.md"

