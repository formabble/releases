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
| `Prefix` | :fontawesome-solid-circle-plus:{title="No"} No  | The message to prefix to the logged output. Note: the prefix will include a colon ':' before the value. | `` | [`String`](../../types/#string) |
| `Level` | :fontawesome-solid-circle-plus:{title="No"} No  | The level of logging. | `LogLevel::Info` | [`LogLevel`](../../../enums/LogLevel) |

</div>

Logs the output of a shard or the value of a variable to the console along with an optional prefix string. The logging level can be specified to control the verbosity of the log output.

## Details

--8<-- "details/shards/General/Log.md"


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

