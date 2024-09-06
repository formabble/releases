---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Ed25519.Verify

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The resulting output of the shard | | [`Bool`](../../types/#bool) |
| `Key` | :fontawesome-solid-circle-plus:{title="No"} No  | The public key of the keypair that signed the message. This will be used to verify the signature. | `none` | [`Bytes`](../../types/#bytes)[`Var(Bytes)`](../../types/#contextvar) |
| `Message` | :fontawesome-solid-circle-plus:{title="No"} No  | The message that was signed to produce the signature. This is the original plain bytes message that the signature was created for. | `none` | [`Bytes`](../../types/#bytes)[`Var(Bytes)`](../../types/#contextvar) |

</div>

Verifies an Ed25519 signature

--8<-- "includes/license.md"

