---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Return

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input to return (when supported) and stop the flow. | | [`Any`](../../types/#any) |
| `Output ➡️` ||This shard does not produce an output as it stops the flow. | | [`None`](../../types/#none) |

</div>

Stops the current flow and returns the provided input. This shard is used to exit the execution of the current wire early within loops or conditional flows, returning the specified input.

--8<-- "includes/license.md"

