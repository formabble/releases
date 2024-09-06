---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Zip

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`[{Any}]`](../../types/#seq)[`[[Any]]`](../../types/#seq) |
| `Sequences` | :fontawesome-solid-circle-plus:{title="No"} No  | The sequences to zip together. | `none` | [`[[Any] Var([Any])]`](../../types/#seq) |
| `Keys` | :fontawesome-solid-circle-plus:{title="No"} No  | The element keys to user. | `none` | [`None`](../../types/#none)[`[String]`](../../types/#seq) |

</div>

Zip will take any number of sequences and return a sequence of sequences, where each sequence is a tuple of the values from the input sequences at the same index.

--8<-- "includes/license.md"

