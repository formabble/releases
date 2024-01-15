---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Ed25519.Verify

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Bytes`](../../types/#bytes) |
| `<output>` || | | [`Bool`](../../types/#bool) |
| `Key` |  | The public key of the keypair that signed the message. This will be used to verify the signature. | `None` | [`Bytes`](../../types/#bytes)[`&Bytes`](../../types/#contextvar) |
| `Message` |  | The message string that was signed to produce the signature. This is the original plaintext message that the signature was created for. When verifying the signature, this message will be hashed and the resulting digest compared to the signature to validate it was produced by signing this exact message. | `None` | [`Bytes`](../../types/#bytes)[`&Bytes`](../../types/#contextvar)[`String`](../../types/#string)[`&String`](../../types/#contextvar) |

</div>



--8<-- "includes/license.md"

