---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Inputs.KeyDown

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The key to check. | `None` | [`String`](../../types/#string) |
| `Action` | :fontawesome-solid-circle-plus:{title="No"} No  | The Shards to run if a key event happened. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Repeat` | :fontawesome-solid-circle-plus:{title="No"} No  | If the key event should be repeated. | `false` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `Modifiers` | :fontawesome-solid-circle-plus:{title="No"} No  | Modifier keys to check. | `None` | [`None`](../../types/#none)[`[ModifierKey]`](../../types/#seq) |
| `Consume` | :fontawesome-solid-circle-plus:{title="No"} No  | Consume events. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `IgnoreConsumed` | :fontawesome-solid-circle-plus:{title="No"} No  | Ignore consumed events. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

