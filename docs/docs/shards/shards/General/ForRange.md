---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ForRange

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input value is not used and will pass through unchanged. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `From` | :fontawesome-solid-circle-plus:{title="No"} No  | The initial iteration value (inclusive). | `0` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `To` | :fontawesome-solid-circle-plus:{title="No"} No  | The final iteration value (inclusive). | `1` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Action` | :fontawesome-solid-circle-plus:{title="No"} No  | The action to perform at each iteration. The current iteration value will be passed as input. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

Executes a series of shards while an iteration value is within a specified range.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/General/ForRange/1.shs"
  ```

  ```
  --8<-- "samples/shards/General/ForRange/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

