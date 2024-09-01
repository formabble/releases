---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# IsRunning

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`None`](../../types/#none) |
| `Output ➡️` ||This shard will either return true if the specified Wire is still running, or false if it has ended. | | [`Bool`](../../types/#bool) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The wire to check. | `None` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none)[`Var(Wire)`](../../types/#contextvar) |

</div>

Checks if a Wire is running and outputs true if it is, false if otherwise. (Note that a looped Wire will always be running and thus will always return true)

--8<-- "includes/license.md"

