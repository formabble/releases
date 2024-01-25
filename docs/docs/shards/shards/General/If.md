---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# If

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The value that will be passed to the predicate. | | [`Any`](../../types/#any) |
| `<output>` ||The input of the shard if `Passthrough` is `true`; otherwise, the output of the action that was performed (i.e. `Then` or `Else`). | | [`Any`](../../types/#any) |
| `Predicate` |  | The predicate to evaluate in order to trigger `Then` (when `true`) or `Else` (when `false`). | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Then` |  | The shards to activate when `Predicate` is `true`. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Else` |  | The shards to activate when `Predicate` is `false`. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Passthrough` |  | The output of this shard will be its input. | `false` | [`Bool`](../../types/#bool) |

</div>

Evaluates a predicate and executes an action.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/If/If.shs"
  ```

  ```
  --8<-- "samples/shards/General/If/If.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

