---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ECDSA.Recover

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The message hash to recover the public key from. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The public key recovered from the signature and message. | | [`Bytes`](../../types/#bytes) |
| `Signature` | :fontawesome-solid-circle-plus:{title="No"} No  | The signature generated from signing the input message with the private key. | `none` | [`Bytes`](../../types/#bytes)[`Var(Bytes)`](../../types/#contextvar) |
| `Compressed` | :fontawesome-solid-circle-plus:{title="No"} No  | Indicates if the output PublicKey should be in compressed format. | `false` | [`Bool`](../../types/#bool) |

</div>

Recovers the public key from the signature and message using the ECDSA algorithm.

--8<-- "includes/license.md"

