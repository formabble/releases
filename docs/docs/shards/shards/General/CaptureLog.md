---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# CaptureLog

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`None`](../../types/#none) |
| `Output ➡️` ||The resulting output of the shard | | [`[String]`](../../types/#seq) |
| `Size` | :fontawesome-solid-circle-plus:{title="No"} No  | The maximum number of logs to retain. | `8` | [`Int`](../../types/#int) |
| `MinLevel` | :fontawesome-solid-circle-plus:{title="No"} No  | The minimum level of logs to capture. | `debug` | [`String`](../../types/#string) |
| `Pattern` | :fontawesome-solid-circle-plus:{title="No"} No  | The pattern used to format the logs. | `%^[%l]%$ [%Y-%m-%d %T.%e] [T-%t] [%s::%#] %v` | [`String`](../../types/#string) |
| `Suspend` | :fontawesome-solid-circle-plus:{title="No"} No  | TODO. | `false` | [`Bool`](../../types/#bool) |

</div>



## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/CaptureLog/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/CaptureLog/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

