---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ForEach

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Sequence/table whose elements or key-value pairs need to be processed. | | [`[Any]`](../../types/#seq)[`{Any}`](../../types/#table) |
| `Output ➡️` ||The output from processing the sequence/table elements or key-value pairs. | | [`[Any]`](../../types/#seq)[`{Any}`](../../types/#table) |
| `Apply` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The processing logic (in the form of a shard or sequence of shards) to apply to the input sequence/table. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

Processes every element or key-value pair of a sequence/table with a given shard or sequence of shards.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/ForEach/2.shs"
  ```

  ```
  --8<-- "samples/shards/General/ForEach/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/ForEach/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/ForEach/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

