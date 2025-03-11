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
| `Message` | :fontawesome-solid-circle-plus:{title="No"} No  | The message to display on the user's screen or console. | `none` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Raw` | :fontawesome-solid-circle-plus:{title="No"} No  | Ignore all other formatting and output the message as-is. | `none` | [`Bool`](../../types/#bool) |
| `Level` | :fontawesome-solid-circle-plus:{title="No"} No  | The logging level to use. | `LogLevel::Info` | [`LogLevel`](../../../enums/LogLevel)[`Var(LogLevel)`](../../types/#contextvar) |
| `Name` | :fontawesome-solid-circle-plus:{title="No"} No  | The name of the logger to use. | `shards` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |

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

