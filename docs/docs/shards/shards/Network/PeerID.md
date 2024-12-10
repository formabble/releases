---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Network.PeerID

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The Peer ID of the peer specified in the Peer parameter. | | [`Int`](../../types/#int) |
| `Peer` | :fontawesome-solid-circle-plus:{title="No"} No  | The Peer object to get the ID of. | `Var: Network.Peer` | [`Var(Object)`](../../types/#contextvar) |

</div>

This shard outputs the Peer ID of the peer specified in the Peer parameter as an integer.

## Details

--8<-- "details/shards/Network/PeerID.md"


--8<-- "includes/license.md"

