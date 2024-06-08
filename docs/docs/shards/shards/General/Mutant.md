---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Mutant

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Shard` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The shard to mutate. | `None` | [`Shard`](../../types/#object) |
| `Indices` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The parameter indices to mutate of the inner shard. | `None` | [`[Int]`](../../types/#seq) |
| `Mutations` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Optional wires of shards (or Nones) to call when mutating one of the parameters, if empty a default operator will be used. | `None` | [`[Shard [Shard] None]`](../../types/#seq) |
| `Options` | :fontawesome-solid-circle-plus:{title="No"} No  | Mutation options table - a table with mutation options. | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table) |

</div>



--8<-- "includes/license.md"

