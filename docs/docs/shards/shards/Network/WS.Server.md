---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Network.WS.Server

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Object`](../../types/#object) |
| `Address` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The local bind address or the remote address. | `None` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Port` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The port to bind if server or to connect to if client. | `None` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Handler` | :fontawesome-solid-circle-plus:{title="No"} No  | The wire to spawn for each new peer that connects, stopping that wire will break the connection. | `None` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Shard]`](../../types/#seq) |
| `Timeout` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The timeout in seconds after which a peer will be disconnected if there is no network activity. | `None` | [`Float`](../../types/#float) |
| `OnDisconnect` | :fontawesome-solid-circle-plus:{title="No"} No  | The flow to execute when a peer disconnects, The Peer ID will be the input. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

A WebSocket server.

--8<-- "includes/license.md"

