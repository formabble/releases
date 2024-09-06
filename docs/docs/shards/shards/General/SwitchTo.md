---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# SwitchTo

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input of this shard will be given as input for the specified Wire | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard is the output of the Wire that execution was switched to, upon switching back to the parent Wire. | | [`Any`](../../types/#any) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The Wire to switch to. If none is provided, the Wire is switched back to the parent Wire it was switched from (should a parent Wire exist). | `none` | [`Wire`](../../types/#wire)[`String`](../../types/#string)[`None`](../../types/#none) |
| `Restart` | :fontawesome-solid-circle-plus:{title="No"} No  | If the Wire should always restart from the beginning instead of resuming from its previous state. | `false` | [`Bool`](../../types/#bool) |
| `StopOnCleanup` | :fontawesome-solid-circle-plus:{title="No"} No  | If the child Wire should be stopped when the parent Wire is Destroyed or Stopped. | `false` | [`Bool`](../../types/#bool) |

</div>

Suspends the current Wire and switches execution to the specified Wire.

--8<-- "includes/license.md"

