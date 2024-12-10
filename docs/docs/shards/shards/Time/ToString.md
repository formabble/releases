---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Time.ToString

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The time to convert. | | [`Int`](../../types/#int)[`Float`](../../types/#float) |
| `Output ➡️` ||A string representation of the time. | | [`String`](../../types/#string) |
| `Millis` | :fontawesome-solid-circle-plus:{title="No"} No  | True if the input is given in milliseconds, False if given in seconds. | `false` | [`Bool`](../../types/#bool) |

</div>

This shard converts time into a human readable string.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/Time/ToString/1.shs"
  ```

  ```
  --8<-- "samples/shards/Time/ToString/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

