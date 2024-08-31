---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Network.Client

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The peer object created. | | [`Object`](../../types/#object) |
| `Address` | :fontawesome-solid-circle-plus:{title="No"} No  | The local bind address or the remote address. | `localhost` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Port` | :fontawesome-solid-circle-plus:{title="No"} No  | The port to bind if server or to connect to if client. | `9191` | [`Int`](../../types/#int)[`Var(Int)`](../../types/#contextvar) |
| `Handler` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to execute when a packet is received. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>

This shard creates a UDP client connection using the KCP protocol, on the address and port specified in the Address and Port parameters.

--8<-- "includes/license.md"

