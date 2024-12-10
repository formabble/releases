---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Physics.End

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Context` | :fontawesome-solid-circle-plus:{title="No"} No  | The physics context object that will manage the simulation | `none` | [`Var(Physics.Context)`](../../types/#contextvar) |
| `TimeStep` | :fontawesome-solid-circle-plus:{title="No"} No  | The amount of simulated time that will elapse during each call to this shard. | `0.0166667` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `MaxIterations` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum number of iterations to run the simulation. A higher number will result in a more accurate simulation, but will take more time to compute. | `1` | [`Int`](../../types/#int)[`Var([Int])`](../../types/#contextvar) |

</div>

This shard runs the physics simulation. It should be called after defining physics bodies to be included in the simulation.

--8<-- "includes/license.md"

