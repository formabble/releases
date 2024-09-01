---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ECDSA.Sign

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The message hash to sign with the private key, must be 32 bytes. | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The signature generated from signing the input message with the private key. | | [`Bytes`](../../types/#bytes) |
| `Key` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | The private key used to sign the hashed message input. | `None` | [`Bytes`](../../types/#bytes)[`Var(Bytes)`](../../types/#contextvar) |

</div>

Signs a message with the private key using the ECDSA algorithm.

--8<-- "includes/license.md"

