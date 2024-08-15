---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Once

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `Action` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The shard or sequence of shards to execute. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Every` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The number of seconds to wait until repeating the action, if 0 the action will happen only once per wire flow execution. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |

</div>

Executes the shard or sequence of shards with the desired frequency in a wire flow execution.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Once/2.shs"
  ```

  ```
  --8<-- "samples/shards/General/Once/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Once/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/Once/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

