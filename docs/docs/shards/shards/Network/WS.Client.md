---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Network.WS.Client

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Object`](../../types/#object) |
| `Address` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The local bind address or the remote address. | `None` | [`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Handler` | :fontawesome-solid-circle-plus:{title="No"} No  | The flow to execute when a packet is received. | `None` | [`Shard`](../../types/#object)[`[Shard]`](../../types/#seq)[`None`](../../types/#none) |
| `Raw` | :fontawesome-solid-circle-plus:{title="No"} No  | Receive raw byte packets. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

