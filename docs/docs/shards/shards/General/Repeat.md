---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Repeat

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input will be passed to both the action and the `Until` condition if used. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `Action` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The shards to repeat. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq) |
| `Times` | :fontawesome-solid-circle-plus:{title="No"} No  | How many times we should repeat the action. | `None` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar)[`None`](../../types/#none) |
| `Forever` | :fontawesome-solid-circle-plus:{title="No"} No  | If we should repeat the action forever. | `false` | [`Bool`](../../types/#bool) |
| `Until` | :fontawesome-solid-circle-plus:{title="No"} No  | Optional shards to use as predicate to continue repeating until it's true | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

Repeat an action a given number of times or until a condition is no longer `true`.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Repeat/2.shs"
  ```

  ```
  --8<-- "samples/shards/General/Repeat/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Repeat/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/Repeat/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

