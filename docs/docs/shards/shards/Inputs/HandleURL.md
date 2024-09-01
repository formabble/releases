---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Inputs.HandleURL

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input value will pass through unchanged. | | [`None`](../../types/#none) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Action` | :fontawesome-solid-circle-plus:{title="No"} No  | Code to execute when a file drop event or URL event is received. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

This shard listens to file drop events and URL events. When files are dropped onto the application or URLs events are received, this shard executes the specified Action for each file dropped or URL event received. The file path or URL is then passed as a string to the Action.

--8<-- "includes/license.md"

