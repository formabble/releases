---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ForRange

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The input value is not used and will pass through. | | [`Any`](../../types/#any) |
| `<output>` ||The output of this shard will be its input. | | [`Any`](../../types/#any) |
| `From` |  | The initial iteration value (inclusive). | `0` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar) |
| `To` |  | The final iteration value (inclusive). | `1` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar) |
| `Action` |  | The action to perform at each iteration. The current iteration value will be passed as input. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"

Executes a shard while an iteration value is within a range.

--8<-- "includes/license.md"

