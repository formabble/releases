---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Await

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||Must match the input types of the first shard in the sequence. | | [`Any`](../../types/#any) |
| `<output>` ||Will match the output types of the first shard of the sequence. | | [`Any`](../../types/#any) |
| `Shards` |  | The shards to activate. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

Executes a shard or a sequence of shards asynchronously and awaits their completion.

--8<-- "includes/license.md"

