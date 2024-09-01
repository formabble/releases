---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Swap

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Input is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The input to this shard is passed through as its output. | | [`Any`](../../types/#any) |
| `First` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The name of first variable. | `None` | [`Var(Any)`](../../types/#contextvar) |
| `Second` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The name of second variable. | `None` | [`Var(Any)`](../../types/#contextvar) |

</div>

Swaps the values of the two variables passed to it via `First` and `Second` parameters.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/Swap/Swap.shs"
  ```

  ```
  --8<-- "samples/shards/General/Swap/Swap.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

