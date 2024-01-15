---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Mutant

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Shard` |  | The shard to mutate. | `None` | [`Shard`](../../types/#object) |
| `Indices` |  | The parameter indices to mutate of the inner shard. | `None` | [`[Int]`](../../types/#seq) |
| `Mutations` |  | Optional wires of shards (or Nones) to call when mutating one of the parameters, if empty a default operator will be used. | `None` | [`[Shard [Shard] None]`](../../types/#seq) |
| `Options` |  | Mutation options table - a table with mutation options. | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table) |

</div>



--8<-- "includes/license.md"

