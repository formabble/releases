---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Log

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value to be logged to the console. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The same value that was inputted, unmodified. | | [`Any`](../../types/#any) |
| `Prefix` | :fontawesome-solid-circle-plus:{title="No"} No  | A prefix string to be added to the log message. | `none` | [`String`](../../types/#string) |
| `Level` | :fontawesome-solid-circle-plus:{title="No"} No  | The logging level to use. | `LogLevel::Info` | [`LogLevel`](../../../enums/LogLevel)[`Var(LogLevel)`](../../types/#contextvar) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the logger to use. | `shards` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |

</div>

Logs the output of a shard or the value of a variable to the console along with an optional prefix string. The logging level can be specified to control the verbosity of the log output.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Log/2.shs"
  ```

  ```
  --8<-- "samples/shards/General/Log/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Log/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/Log/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

