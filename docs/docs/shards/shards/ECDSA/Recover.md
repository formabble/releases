---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# ECDSA.Recover

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Bytes`](../../types/#bytes) |
| `Output ➡️` ||The resulting output of the shard | | [`Bytes`](../../types/#bytes) |
| `Signature` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The signature generated signing the input message with the private key. | `None` | [`Bytes`](../../types/#bytes)[`&Bytes`](../../types/#contextvar) |
| `Compressed` | :fontawesome-solid-circle-plus:{title="No"}  | If the output PublicKey should use the compressed format. | `false` | [`Bool`](../../types/#bool) |

</div>



--8<-- "includes/license.md"

