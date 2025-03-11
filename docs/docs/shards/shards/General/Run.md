---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Run

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Bool`](../../types/#bool) |
| `Mesh` | :fontawesome-solid-circle-plus:{title="No"} No  | The mesh to run | `none` | [`Mesh`](../../types/#mesh) |
| `TickTime` | :fontawesome-solid-circle-plus:{title="No"} No  | Time per frame | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Iterations` | :fontawesome-solid-circle-plus:{title="No"} No  | Number of iterations | `none` | [`None`](../../types/#none)[`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `FPS` | :fontawesome-solid-circle-plus:{title="No"} No  | Frames per second | `none` | [`None`](../../types/#none)[`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `Detached` | :fontawesome-solid-circle-plus:{title="No"} No  | If true, the mesh will run on its own worker thread, and simply suspend on the parent context | `false` | [`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

