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
| `Context` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The context | `None` | [`Var(Physics.Context)`](../../types/#contextvar) |
| `TimeStep` | :fontawesome-solid-circle-plus:{title="No"} No  | Time to simulate | `0.0166667` | [`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `MaxIterations` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum number of iterations to run the simulation in | `1` | [`Int`](../../types/#int)[`Var([Int])`](../../types/#contextvar) |

</div>

Runs physics simulation, should be run after defining physics bodies

--8<-- "includes/license.md"

