---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Inputs.MouseUp

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Input of any type is accepted. The input is passed as input to the code specified in the Action parameter. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Left` | :fontawesome-solid-circle-plus:{title="No"} No  | The action to perform when the left mouse button is pressed down. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Right` | :fontawesome-solid-circle-plus:{title="No"} No  | The action to perform when the right mouse button is pressed down. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Middle` | :fontawesome-solid-circle-plus:{title="No"} No  | The action to perform when the middle mouse button is pressed down. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Consume` | :fontawesome-solid-circle-plus:{title="No"} No  | If set to true, this event will be consumed. Meaning, if there was a previous shard with "Consume" set to true, all subsequent calls of the same shard with the same key specified will not activate. | `true` | [`Bool`](../../types/#bool) |
| `SkipConsumed` | :fontawesome-solid-circle-plus:{title="No"} No  | If true, skips events already consumed by previous shards. If false, processes all events regardless of their consumed state. | `true` | [`Bool`](../../types/#bool) |

</div>

Checks if the appropriate mouse button is released. If it is released, the shard executes the code specified in the respective parameter on the frame the button is released.(If the Right Mouse button was released, the code specified in the Right parameter will be executed.)

--8<-- "includes/license.md"

