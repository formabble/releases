---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Log

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Prefix` |  | The message to prefix to the logged output. | `` | [`String`](../../types/#string) |
| `Level` |  | The level of logging. | `LogLevel.Info` | [`LogLevel`](../../../enums/LogLevel) |

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

