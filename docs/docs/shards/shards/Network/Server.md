---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Network.Server

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Any`](../../types/#any) |
| `Address` |  | The local bind address or the remote address. | `localhost` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Port` |  | The port to bind if server or to connect to if client. | `9191` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar) |
| `Handler` |  | The wire to spawn for each new peer that connects, stopping that wire will break the connection. | `None` | [`Wire`](../../types/#wire)[`None`](../../types/#none) |
| `Timeout` |  | The timeout in seconds after which a peer will be disconnected if there is no network activity. | `30` | [`Float`](../../types/#float) |
| `OnDisconnect` |  | The flow to execute when a peer disconnects, The Peer ID will be the input. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>



--8<-- "includes/license.md"

