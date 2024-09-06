---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Evolve

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||This shard outputs a [Type::Float Type::Wire] pair. This pair represents the wire configuration from the current generation that scored the best fitness score and the fitness score itself. | | [`[Float Wire]`](../../types/#seq) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The wire to optimize and evolve. | `none` | [`Wire`](../../types/#wire) |
| `Fitness` | :fontawesome-solid-circle-plus:{title="No"} No  | The fitness wire to run at the end of the main wire evaluation and using its last output; should output a Float fitness value. | `none` | [`Wire`](../../types/#wire) |
| `Population` | :fontawesome-solid-circle-plus:{title="No"} No  | The population size. | `64` | [`Int`](../../types/#int) |
| `Mutation` | :fontawesome-solid-circle-plus:{title="No"} No  | The rate of mutation, 0.1 = 10%. | `0.2` | [`Float`](../../types/#float) |
| `Crossover` | :fontawesome-solid-circle-plus:{title="No"} No  | The rate of crossover, 0.1 = 10%. | `0.2` | [`Float`](../../types/#float) |
| `Extinction` | :fontawesome-solid-circle-plus:{title="No"} No  | The rate of extinction, 0.1 = 10%. | `0.1` | [`Float`](../../types/#float) |
| `Elitism` | :fontawesome-solid-circle-plus:{title="No"} No  | The rate of elitism, 0.1 = 10%. | `0.1` | [`Float`](../../types/#float) |
| `Threads` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of cpu threads to use. | `2` | [`Int`](../../types/#int) |
| `Coroutines` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of coroutines to run on each thread. | `8` | [`Int`](../../types/#int) |

</div>

This shard uses genetic algorithm to evolve and change the configuration of the wire specified in the Wire parameter. The evolved wires are given a score based on the fitness wire specified in the Fitness Wire parameter. The shard then outputs the best wire and its fitness score. This shard should be used in conjunction with the Mutant shard.

## Details

--8<-- "details/shards/General/Evolve.md"


--8<-- "includes/license.md"

