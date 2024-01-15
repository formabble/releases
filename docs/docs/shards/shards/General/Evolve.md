---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Evolve

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`[Float Wire]`](../../types/#seq) |
| `Wire` |  | The wire to optimize and evolve. | `None` | [`Wire`](../../types/#wire) |
| `Fitness` |  | The fitness wire to run at the end of the main wire evaluation and using its last output; should output a Float fitness value. | `None` | [`Wire`](../../types/#wire) |
| `Population` |  | The population size. | `64` | [`Int`](../../types/#int) |
| `Mutation` |  | The rate of mutation, 0.1 = 10%. | `0.2` | [`Float`](../../types/#float) |
| `Crossover` |  | The rate of crossover, 0.1 = 10%. | `0.2` | [`Float`](../../types/#float) |
| `Extinction` |  | The rate of extinction, 0.1 = 10%. | `0.1` | [`Float`](../../types/#float) |
| `Elitism` |  | The rate of elitism, 0.1 = 10%. | `0.1` | [`Float`](../../types/#float) |
| `Threads` |  | The number of cpu threads to use. | `2` | [`Int`](../../types/#int) |
| `Coroutines` |  | The number of coroutines to run on each thread. | `8` | [`Int`](../../types/#int) |

</div>



--8<-- "includes/license.md"

