---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Evolve

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`[Float Wire]`](../../types/#seq) |
| `Wire` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The wire to optimize and evolve. | `None` | [`Wire`](../../types/#wire) |
| `Fitness` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The fitness wire to run at the end of the main wire evaluation and using its last output; should output a Float fitness value. | `None` | [`Wire`](../../types/#wire) |
| `Population` | :fontawesome-solid-circle-plus:{title="No"} No  | The population size. | `64` | [`Int`](../../types/#int) |
| `Mutation` | :fontawesome-solid-circle-plus:{title="No"} No  | The rate of mutation, 0.1 = 10%. | `0.2` | [`Float`](../../types/#float) |
| `Crossover` | :fontawesome-solid-circle-plus:{title="No"} No  | The rate of crossover, 0.1 = 10%. | `0.2` | [`Float`](../../types/#float) |
| `Extinction` | :fontawesome-solid-circle-plus:{title="No"} No  | The rate of extinction, 0.1 = 10%. | `0.1` | [`Float`](../../types/#float) |
| `Elitism` | :fontawesome-solid-circle-plus:{title="No"} No  | The rate of elitism, 0.1 = 10%. | `0.1` | [`Float`](../../types/#float) |
| `Threads` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of cpu threads to use. | `2` | [`Int`](../../types/#int) |
| `Coroutines` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of coroutines to run on each thread. | `8` | [`Int`](../../types/#int) |

</div>



--8<-- "includes/license.md"

