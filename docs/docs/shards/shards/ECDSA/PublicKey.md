---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ECDSA.PublicKey

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The private key to generate the public key from. | | [`Bytes`](../../types/#bytes)[`String`](../../types/#string) |
| `Output ➡️` ||The public key generated from the private key. | | [`Bytes`](../../types/#bytes) |
| `Compressed` | :fontawesome-solid-circle-plus:{title="No"} No  | Indicates if the output PublicKey should be in compressed format. | `false` | [`Bool`](../../types/#bool) |

</div>

Generates the public key from the private key using the ECDSA algorithm.

--8<-- "includes/license.md"

