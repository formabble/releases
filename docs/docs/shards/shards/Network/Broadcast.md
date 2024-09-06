---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Network.Broadcast

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input to broadcast to all connected peers. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Server` | :fontawesome-solid-circle-plus:{title="No"} No  | The server to send the input to. | `Var: Network.Server` | [`Var(Object)`](../../types/#contextvar) |
| `Exclude` | :fontawesome-solid-circle-plus:{title="No"} No  | The list of Peer IDs to exclude from the broadcast. | `none` | [`Var([Int])`](../../types/#contextvar)[`[Int]`](../../types/#seq)[`None`](../../types/#none) |

</div>

This shard sends the input to all peers connected to the server (created by Network.Server) specified in the Server parameter.

--8<-- "includes/license.md"

