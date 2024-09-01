---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Network.Send

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input to send to the peer. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Peer` | :fontawesome-solid-circle-plus:{title="No"} No  | The optional explicit peer to send packets to. | `ContextVariable: Network.Peer` | [`Var(Object)`](../../types/#contextvar) |

</div>

This shard sends the input to the peer specified in the Peer parameter.

## Details

--8<-- "details/shards/Network/Send.md"


--8<-- "includes/license.md"

