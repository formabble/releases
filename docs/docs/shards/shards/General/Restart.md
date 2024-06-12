---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Restart

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input to restart the wire with. Must match the wire's root input type. | | [`Any`](../../types/#any) |
| `Output ➡️` ||This shard does not produce an output as it restarts the flow. | | [`None`](../../types/#none) |

</div>

Restarts the current flow with the provided input. This shard is used to restart the execution of the current wire from the beginning, using the same input. It ensures that the input type matches the wire's root input type. Note: This is a flow stopper and will not continue to subsequent shards in the current execution sequence.

--8<-- "includes/license.md"

