---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Hashed

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value passed to the first shard in the hashed sequence. | | [`Any`](../../types/#any) |
| `<output>` ||The hash of the output of the last shard in the hashed sequence. | | [`Any`](../../types/#any) |
| `Shards` |  | The shards to execute in the hashed flow. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"

Hashes the output of a shard or of a sequence of shards.

--8<-- "includes/license.md"

