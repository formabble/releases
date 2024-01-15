---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# When

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the predicate. | | [`Any`](../../types/#any) |
| `<output>` ||The input of the shard if `Passthrough` is `true`, or the `Predicate` is `false`; otherwise, the output of the `Action`. | | [`Any`](../../types/#any) |
| `Predicate` |  | The predicate to evaluate in order to trigger Action. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Action` |  | The shards to activate on when Predicate is true for When and false for WhenNot. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Passthrough` |  | The output of this shard will be its input. | `true` | [`Bool`](../../types/#bool) |

</div>

--8<-- "includes/experimental.md"

Conditional shard that only executes the action if the predicate is true.

--8<-- "includes/license.md"

