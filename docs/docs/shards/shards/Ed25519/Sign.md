---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Ed25519.Sign

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The resulting output of the shard | | [`Bytes`](../../types/#bytes) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The private key to be used to sign the message input. | `none` | [`Bytes`](../../types/#bytes)[`Var(Bytes)`](../../types/#contextvar) |

</div>

Signs a message using the Ed25519 signature algorithm.

--8<-- "includes/license.md"

