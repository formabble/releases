---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ForEach

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Sequence/table whose elements or key-value pairs need to be processed. | | [`[Any]`](../../types/#seq)[`{Any}`](../../types/#table) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`[Any]`](../../types/#seq)[`{Any}`](../../types/#table) |
| `Apply` | :fontawesome-solid-circle-plus:{title="No"} No  | The processing logic (in the form of a shard or sequence of shards) to apply to the input sequence/table. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |

</div>

Processes every element or key-value pair of a sequence/table with the shards specified in the `Apply` parameter. Note that this shard is able to use the $0 and $1 internal variables, as well as $i for the current index.

## Details

--8<-- "details/shards/General/ForEach.md"


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

