---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Sr25519.Verify

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The resulting output of the shard | | [`Bool`](../../types/#bool) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The public key of the keypair that signed the message. This will be used to verify the signature. | `None` | [`Bytes`](../../types/#bytes)[`&Bytes`](../../types/#contextvar) |
| `Message` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The message string that was signed to produce the signature. This is the original plaintext message that the signature was created for. When verifying the signature, this message will be hashed and the resulting digest compared to the signature to validate it was produced by signing this exact message. | `None` | [`Bytes`](../../types/#bytes)[`&Bytes`](../../types/#contextvar)[`String`](../../types/#string)[`&String`](../../types/#contextvar) |

</div>



--8<-- "includes/license.md"

