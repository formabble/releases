---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# LogType

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Prefix` | :fontawesome-solid-circle-plus:{title="No"}  | The message to prefix to the logged output. | `` | [`String`](../../types/#string) |
| `Level` | :fontawesome-solid-circle-plus:{title="No"}  | The level of logging. | `LogLevel.Info` | [`LogLevel`](../../../enums/LogLevel) |

</div>

Logs the type of the passed variable to the console (along with an optional prefix string).

--8<-- "includes/license.md"

