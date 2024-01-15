---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Sub

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The input value passed to this Sub flow (and hence to the shard or sequence of shards in this Sub flow). | | [`Any`](../../types/#any) |
| `<output>` ||The output of this Sub flow (which is the same as its input). | | [`Any`](../../types/#any) |
| `Shards` |  | The shard or sequence of shards to execute in the Sub flow. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"

Activates a shard or a sequence of shards independently, without consuming the input. I.e. the input of the Sub flow will also be its output regardless of the shards activated in this Sub flow.

--8<-- "includes/license.md"

