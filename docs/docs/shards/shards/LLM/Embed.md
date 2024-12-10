---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# LLM.Embed

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`[Int]`](../../types/#seq) |
| `Output ➡️` ||The resulting output of the shard | | [`[Float]`](../../types/#seq) |
| `Model` | :fontawesome-solid-circle-plus:{title="No"} No  | The model to use | `none` | [`Var(LLM.Model)`](../../types/#contextvar) |
| `Normalization` | :fontawesome-solid-circle-plus:{title="No"} No  | Normalization type: -1=none, 0=max_abs, 2=euclidean, >2=p-norm | `-1` | [`Int`](../../types/#int) |

</div>



--8<-- "includes/license.md"

