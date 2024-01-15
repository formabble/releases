---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Network.Client

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Object`](../../types/#object) |
| `Address` |  | The local bind address or the remote address. | `localhost` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Port` |  | The port to bind if server or to connect to if client. | `9191` | [`Int`](../../types/#int)[`&Int`](../../types/#contextvar) |
| `Handler` |  | The flow to execute when a packet is received. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |

</div>



--8<-- "includes/license.md"

