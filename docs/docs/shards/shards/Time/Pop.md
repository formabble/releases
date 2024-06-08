---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Time.Pop

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Sequence` | :fontawesome-solid-circle-plus:{title="No"} No  | A variables sequence of pairs [value pop-epoch-time-ms] with types [Any SHType::Int] | `None` | [`&(Any Int)`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

This shards delays its output until one of the values of the sequence parameter expires.

--8<-- "includes/license.md"

