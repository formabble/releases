---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Inputs.KeyDown

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Input of any type is accepted. The input is passed as input to the code specified in the Action parameter. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The key to check. | `none` | [`String`](../../types/#string) |
| `Action` | :fontawesome-solid-circle-plus:{title="No"} No  | The code to run if the key event happened. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Repeat` | :fontawesome-solid-circle-plus:{title="No"} No  | If set to true, the event specified in the Action parameter will be repeated if the key is held down. Otherwise, the event will be executed only on the frame the key is pressed down. | `false` | [`Bool`](../../types/#bool) |
| `Modifiers` | :fontawesome-solid-circle-plus:{title="No"} No  | Modifier keys to check for such as "leftctrl", "leftshift", "leftalt", "rightctrl", "rightshift", "rightalt", etc. | `none` | [`None`](../../types/#none)[`[ModifierKey]`](../../types/#seq) |
| `Consume` | :fontawesome-solid-circle-plus:{title="No"} No  | If set to true, this event will be consumed. Meaning, if there was a previous shard with "Consume" set to true, all subsequent calls of the same shard with the same key specified will not activate. | `true` | [`Bool`](../../types/#bool) |
| `SkipConsumed` | :fontawesome-solid-circle-plus:{title="No"} No  | If true, skips events already consumed by previous shards. If false, processes all events regardless of their consumed state. | `true` | [`Bool`](../../types/#bool) |

</div>

This shard checks if the key specified is pressed down. If the key is pressed down, the shard executes the code specified in the Action parameter on the frame the key is pressed down. If the Repeat parameter is set to true, the code specified in the Action parameter will be repeated every frame the key is held down instead.

--8<-- "includes/license.md"

