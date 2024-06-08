---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# When

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to the predicate. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input of the shard if `Passthrough` is `true`, or the `Predicate` is `false`; otherwise, the output of the `Action`. | | [`Any`](../../types/#any) |
| `Predicate` | :fontawesome-solid-circle-plus:{title="No"} No  | The predicate to evaluate in order to trigger Action. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Action` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to activate on when Predicate is true for When and false for WhenNot. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Passthrough` | :fontawesome-solid-circle-plus:{title="No"} No  | The output of this shard will be its input. | `true` | [`Bool`](../../types/#bool) |

</div>

Conditional shard that only executes the action if the predicate is true.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/When/When.shs"
  ```

  ```
  --8<-- "samples/shards/General/When/When.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

