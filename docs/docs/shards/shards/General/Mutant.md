---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Mutant

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input value will pass through unchanged. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Shard` | :fontawesome-solid-circle-plus:{title="No"} No  | The shard to mutate. | `none` | [`Shard`](../../types/#object) |
| `Indices` | :fontawesome-solid-circle-plus:{title="No"} No  | The parameter indices to mutate of the inner shard. | `none` | [`[Int]`](../../types/#seq) |
| `Mutations` | :fontawesome-solid-circle-plus:{title="No"} No  | Optional operations to apply to the parameters, if empty a default operator will be used. | `none` | [`[Shard [Shard] None]`](../../types/#seq) |
| `Options` | :fontawesome-solid-circle-plus:{title="No"} No  | Mutation options table - a table with mutation options. | `none` | [`None`](../../types/#none)[`{Any}`](../../types/#table) |

</div>

This shard modifies the parameters of the shard specified in the Shard parameter. Which parameters are modified is specified Indices parameter and how they are modified is specified in the Mutations parameter. This shard should be used in conjunction with the Evolve shard to evolve the wire.

## Details

--8<-- "details/shards/General/Mutant.md"


--8<-- "includes/license.md"

