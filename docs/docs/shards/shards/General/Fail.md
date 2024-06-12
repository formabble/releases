---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Fail

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The error message to cancel the flow with. | | [`String`](../../types/#string) |
| `Output ➡️` ||This shard does not produce an output as it cancels the flow. | | [`None`](../../types/#none) |

</div>

Stops the current flow and cancels the execution with the provided error message. This shard is used to signal an error and halt the execution of the current wire.

--8<-- "includes/license.md"

