---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Msg

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input is ignored. This shard displays a static message. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The same variable that was inputted, unmodified. | | [`Any`](../../types/#any) |
| `Message` | :fontawesome-solid-circle-plus:{title="No"} No  | The message to display on the user's screen or console. | `` | [`String`](../../types/#string) |
| `Level` | :fontawesome-solid-circle-plus:{title="No"} No  | The level of logging. | `LogLevel::Info` | [`LogLevel`](../../../enums/LogLevel) |

</div>

Displays the passed message string to the user via standard output. The input variable is ignored, and only the static message is displayed.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Msg/2.shs"
  ```

  ```
  --8<-- "samples/shards/General/Msg/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Msg/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/Msg/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

