---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# LogType

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value whose type will be logged to the console. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The same value that was inputted, unmodified. | | [`Any`](../../types/#any) |
| `Prefix` | :fontawesome-solid-circle-plus:{title="No"} No  | The message to prefix to the logged output. Note: the prefix will include a colon ':' before the value. | `` | [`String`](../../types/#string) |
| `Level` | :fontawesome-solid-circle-plus:{title="No"} No  | The level of logging. | `LogLevel::Info` | [`LogLevel`](../../../enums/LogLevel) |

</div>

Logs the type of the value to the console along with an optional prefix string. The logging level can be specified to control the verbosity of the log output.

--8<-- "includes/license.md"

