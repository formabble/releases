---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Network.WS.Client

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of this shard is ignored. | | [`Any`](../../types/#any) |
| `Output ➡️` ||The peer object created. | | [`Object`](../../types/#object) |
| `Address` | :fontawesome-solid-circle-plus:{title="No"} No  | The local bind address or the remote address. | `none` | [`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Handler` | :fontawesome-solid-circle-plus:{title="No"} No  | The shards to execute when a packet is received. | `none` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Raw` | :fontawesome-solid-circle-plus:{title="No"} No  | If set to true, the client will receive raw byte packets instead of serialized objects. | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>

This shard creates a WebSocket client connection using the TCP, on the address specified in the Address.

--8<-- "includes/license.md"

