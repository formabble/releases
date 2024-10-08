---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Network.WS.Server

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The server object created. | | [`Object`](../../types/#object) |
| `Address` | :fontawesome-solid-circle-plus:{title="No"} No  | The local bind address or the remote address. | `none` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Port` | :fontawesome-solid-circle-plus:{title="No"} No  | The port to bind if server or to connect to if client. | `none` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Handler` | :fontawesome-solid-circle-plus:{title="No"} No  | The wire to spawn for each new peer that connects, stopping that wire will break the connection. | `none` | [`None`](../../types/#none)[`Wire`](../../types/#wire)[`[Shard]`](../../types/#seq) |
| `Timeout` | :fontawesome-solid-circle-plus:{title="No"} No  | The timeout in seconds after which a peer will be disconnected if there is no network activity. | `none` | [`Float`](../../types/#float) |
| `OnDisconnect` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to execute when a peer disconnects, The Peer ID will be the input. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

This shard sets up a Websocket network server using TCP, on the address and port specified in the Address and Port parameters. This server then handles client connections and disconnections, messages received from clients and broadcasting messages to these clients.

## Details

--8<-- "details/shards/Network/WS.Server.md"


--8<-- "includes/license.md"

