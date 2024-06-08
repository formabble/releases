---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Log

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Prefix` | :fontawesome-solid-circle-plus:{title="No"}  | The message to prefix to the logged output. | `` | [`String`](../../types/#string) |
| `Level` | :fontawesome-solid-circle-plus:{title="No"}  | The level of logging. | `LogLevel.Info` | [`LogLevel`](../../../enums/LogLevel) |

</div>

Logs the output of a shard or the value of a variable to the console (along with an optional prefix string).

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

