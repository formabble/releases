---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Cond

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The value that will be passed to each predicate and action to execute. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input of the shard if `Passthrough` is `true`; otherwise, the output of the action of the first matching condition. | | [`Any`](../../types/#any) |
| `Wires` | :fontawesome-solid-circle-plus:{title="No"} No  | A sequence of shards, interleaving condition test predicate and action to execute if the condition matches. | `none` | [`[Shard [Shard] None]`](../../types/#seq) |
| `Passthrough` | :fontawesome-solid-circle-plus:{title="No"} No  | The output of this shard will be its input. | `true` | [`Bool`](../../types/#bool) |
| `Threading` | :fontawesome-solid-circle-plus:{title="No"} No  | Will not short circuit after the first true test expression. The threaded value gets used in only the action and not the test part of the clause. | `false` | [`Bool`](../../types/#bool) |

</div>

Takes a sequence of conditions and predicates. Evaluates each condition one by one and if one matches, executes the associated action.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Cond/Cond.shs"
  ```

  ```
  --8<-- "samples/shards/General/Cond/Cond.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

