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
| `Prefix` | :fontawesome-solid-circle-plus:{title="No"} No  | A prefix string to be added to the log message. | `none` | [`String`](../../types/#string) |
| `Level` | :fontawesome-solid-circle-plus:{title="No"} No  | The logging level to use. | `LogLevel::Info` | [`LogLevel`](../../../enums/LogLevel)[`Var(LogLevel)`](../../types/#contextvar) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the logger to use. | `shards` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |

</div>

Logs the type of the value to the console along with an optional prefix string. The logging level can be specified to control the verbosity of the log output.

--8<-- "includes/license.md"

