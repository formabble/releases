---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Maybe

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Must match the input types of the first shard in the sequence. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Will match the output types of the first shard of the sequence. | | [`Any`](../../types/#any) |
| `Shards` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to activate. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Else` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to activate on failure. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Silent` | :fontawesome-solid-circle-plus:{title="No"} No  | If logging should be disabled while running the shards (this will also disable (Log) and (Msg) shards) and no warning message should be printed on failure. | `false` | [`Bool`](../../types/#bool) |

</div>

Attempts to activate a shard or a sequence of shards. Upon failure, activate another shard or sequence of shards.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Maybe/2.shs"
  ```

  ```
  --8<-- "samples/shards/General/Maybe/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Maybe/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/Maybe/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

