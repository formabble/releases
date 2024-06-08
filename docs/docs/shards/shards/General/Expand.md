---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Expand

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`[Any]`](../../types/#seq) |
| `Size` | :fontawesome-solid-circle-plus:{title="No"} No  | The expansion size. | `10` | [`Int`](../../types/#int) |
| `Wire` | :fontawesome-solid-circle-plus:{title="No"} No  | The wire to spawn and try to run many times concurrently. | `None` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Shard]`](../../types/#seq) |
| `Policy` | :fontawesome-solid-circle-plus:{title="No"} No  | The execution policy in terms of wires success. | `WaitUntil.AllSuccess` | [`WaitUntil`](../../../enums/WaitUntil) |
| `Threads` | :fontawesome-solid-circle-plus:{title="No"} No  | The number of cpu threads to use. | `1` | [`Int`](../../types/#int) |

</div>



## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Expand/Expand.shs"
  ```

  ```
  --8<-- "samples/shards/General/Expand/Expand.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

