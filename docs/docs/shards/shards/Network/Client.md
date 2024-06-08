---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Network.Client

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Object`](../../types/#object) |
| `Address` | :fontawesome-solid-circle-plus:{title="No"}  | The local bind address or the remote address. | `localhost` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Port` | :fontawesome-solid-circle-plus:{title="No"}  | The port to bind if server or to connect to if client. | `9191` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar) |
| `Handler` | :fontawesome-solid-circle-plus:{title="No"}  | The flow to execute when a packet is received. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>



--8<-- "includes/license.md"

